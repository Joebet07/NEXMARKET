/* STUDY THIS FILE AFTER main.js.
   Flow: load cart -> calculate totals -> display -> handle clicks -> save. */
function validCart() {
  const savedCart = read("cart");
  const validItems = [];
  for (let index = 0; index < savedCart.length; index++) {
    const item = savedCart[index];
    const product = byId(item.id);
    if (!product) continue;
    const quantity = Math.min(item.qty, product.stock);
    if (Number.isInteger(quantity) && quantity > 0) {
      validItems.push({ id: item.id, qty: quantity });
    }
  }
  return validItems;
}

function calculateCartTotals(cart) {
  let subtotal = 0;
  for (let index = 0; index < cart.length; index++) {
    const item = cart[index];
    const product = byId(item.id);
    subtotal = subtotal + product.price * item.qty;
  }
  let shipping = 0;
  if (cart.length > 0) shipping = 150;
  return { subtotal: subtotal, shipping: shipping, total: subtotal + shipping };
}

// Return the HTML for ONE row. The loop below reuses it for each item.
function createCartRow(item) {
  const product = byId(item.id);
  return /* HTML */ ` <div class="cart-row">
    ${imageTag(product)}
    <div class="row-copy">
      <h3><a href="product.html?id=${product.id}">${esc(product.name)}</a></h3>
      <p class="note mb-1">${esc(product.condition)} ${esc(product.grade)}</p>
      <strong>${peso(product.price)}</strong>
    </div>
    <label>
      <span class="note d-block">Qty</span>
      <input
        class="field quantity"
        type="number"
        min="1"
        max="${product.stock}"
        step="1"
        value="${item.qty}"
        data-qty="${product.id}"
        aria-label="Quantity for ${esc(product.name)}"
      />
    </label>
    <strong>${peso(item.qty * product.price)}</strong>
    <button
      class="icon-btn"
      data-remove="${product.id}"
      aria-label="Remove ${esc(product.name)}"
    >
      ${icon("x")}
    </button>
  </div>`;
}

function removeCartItem(id) {
  const cart = read("cart");
  const remaining = [];
  for (let index = 0; index < cart.length; index++) {
    if (String(cart[index].id) !== String(id)) remaining.push(cart[index]);
  }
  if (write("cart", remaining)) renderCart();
}

function changeCartQuantity(id, quantity) {
  const product = byId(id);
  if (
    !product ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > product.stock
  ) {
    toast("Enter a whole quantity within the available stock.");
    renderCart();
    return;
  }
  const cart = read("cart");
  for (let index = 0; index < cart.length; index++) {
    if (String(cart[index].id) === String(id)) cart[index].qty = quantity;
  }
  if (write("cart", cart)) renderCart();
}

function renderCart() {
  const cart = validCart();
  write("cart", cart);
  updateCartCount();
  const totals = calculateCartTotals(cart);
  let content = "";

  if (cart.length === 0) {
    content =
      '<div class="empty"><h2>Your next find is waiting.</h2><p>Your bag is empty.</p><a href="shop.html" class="btn btn-mint">Discover electronics</a></div>';
  } else {
    let rows = "";
    for (let index = 0; index < cart.length; index++)
      rows = rows + createCartRow(cart[index]);
    content = /* HTML */ ` <div class="cart-layout">
      <section>
        ${rows}<a href="shop.html" class="btn btn-outline mt-4"
          >Continue shopping</a
        >
      </section>
      <aside class="panel align-self-start">
        <h2>Order summary</h2>
        <div class="total-line">
          <span>Subtotal</span><strong>${peso(totals.subtotal)}</strong>
        </div>
        <div class="total-line">
          <span>Sample shipping</span><span>${peso(totals.shipping)}</span>
        </div>
        <hr />
        <div class="total-line">
          <strong>Total</strong><strong>${peso(totals.total)}</strong>
        </div>
        <button id="checkout" class="btn btn-mint w-100">Demo checkout</button>
        <p class="note mt-3">No real payment, order or delivery is created.</p>
      </aside>
    </div>`;
  }
  getElement("#main").innerHTML = /* HTML */ ` <div class="wrap">
    <div class="page-head">
      <div class="eyebrow">ONE STEP CLOSER TO YOUR NEXT</div>
      <h1>Your shopping bag.</h1>
      <p class="muted">A good upgrade starts with a great find.</p>
    </div>
    ${content}
  </div>`;

  // Attach events AFTER creating the buttons and inputs.
  const removeButtons = getAllElements("[data-remove]");
  for (let index = 0; index < removeButtons.length; index++) {
    const button = removeButtons[index];
    button.onclick = function () {
      removeCartItem(button.dataset.remove);
    };
  }
  const quantityInputs = getAllElements("[data-qty]");
  for (let index = 0; index < quantityInputs.length; index++) {
    const input = quantityInputs[index];
    input.onchange = function () {
      changeCartQuantity(input.dataset.qty, Number(input.value));
    };
  }
  if (cart.length > 0) {
    getElement("#checkout").onclick = function () {
      openCheckout(cart, totals);
    };
  }
}

function openCheckout(cart, totals) {
  if (!NexAuth.current()) {
    location.href = "login.html?next=cart.html";
    return;
  }
  let rows = "";
  for (let index = 0; index < cart.length; index++) {
    const item = cart[index];
    const product = byId(item.id);
    rows =
      rows +
      `<div class="total-line"><span>${esc(product.name)} × ${item.qty}</span><strong>${peso(product.price * item.qty)}</strong></div>`;
  }
  showModal(
    "Review demo checkout",
    /* HTML */ ` <p>This is a simulation. You will not be charged.</p>
      ${rows}
      <div class="total-line">
        <span>Sample delivery</span><strong>${peso(totals.shipping)}</strong>
      </div>
      <hr />
      <div class="total-line">
        <strong>Demo total</strong><strong>${peso(totals.total)}</strong>
      </div>
      ${paymentPicker()}`,
    '<button class="btn btn-outline" data-bs-dismiss="modal">Back to bag</button><button class="btn btn-mint" id="complete-order">Complete demo checkout</button>',
  );
  mountPayments();
  getElement("#complete-order").onclick = function () {
    completeDemoOrder(cart, totals);
  };
}

function completeDemoOrder(cart, totals) {
  let payment;
  try {
    const chosenRadio = getElement('input[name="payment-method"]:checked');
    const bankSelect = getElement("#demo-bank");
    let method = "";
    let bank = "";
    if (chosenRadio) method = chosenRadio.value;
    if (bankSelect) bank = bankSelect.value;
    payment = paymentSelection(method, bank);
  } catch (error) {
    getElement("#payment-error").textContent = error.message;
    return;
  }
  getElement("#complete-order").disabled = true;
  const orderItems = [];
  for (let index = 0; index < cart.length; index++) {
    const item = cart[index];
    const product = byId(item.id);
    // Save the name and price too, so the receipt survives a deleted listing.
    orderItems.push({
      id: item.id,
      qty: item.qty,
      name: product.name,
      price: product.price,
    });
  }
  const reference = "DEMO-" + Date.now();
  const orders = read("orders");
  orders.push({
    id: reference,
    payment: payment,
    items: orderItems,
    total: totals.total,
    date: new Date().toISOString(),
  });
  if (write("orders", orders) && write("cart", [])) {
    renderCart();
    showModal(
      "Your demo checkout is complete",
      /* HTML */ ` <div class="text-center py-3">
        <h3>Demo order saved.</h3>
        <p>Demo reference: ${reference}</p>
        <p><strong>${esc(payment.label)}</strong> ${esc(payment.bank)}</p>
        <p class="positive">${esc(payment.status)}</p>
        <p>Total: ${peso(totals.total)}</p>
        <p class="note">
          No money was collected. No item will be shipped. Stock remains
          unchanged.
        </p>
        <a href="account.html" class="btn btn-mint">View order history</a>
      </div>`,
    );
  } else {
    getElement("#complete-order").disabled = false;
  }
}
renderCart();
