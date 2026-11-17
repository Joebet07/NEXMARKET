/* Shared UI and storage helpers. User-entered text is escaped before rendering. */
// Find one HTML element by its CSS selector (for example, #main).
function getElement(selector, root = document) {
  return root.querySelector(selector);
}
// Find all matching elements and return them as an array.
function getAllElements(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const peso = (value) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 2,
  })
    .format(Number(value) || 0)
    .replace(/\.00$/, "");
// LocalStorage holds text. JSON converts an array/object to text and back.
function read(key, fallback = []) {
  try {
    const storedText = localStorage.getItem(NexAuth.scope(key));
    if (storedText === null) return fallback;
    return JSON.parse(storedText);
  } catch (error) {
    return fallback;
  }
}
function write(key, value) {
  try {
    const storedText = JSON.stringify(value);
    localStorage.setItem(NexAuth.scope(key), storedText);
    return true;
  } catch (error) {
    toast(
      "Browser storage is full or unavailable. Try smaller images or remove an old listing.",
    );
    return false;
  }
}
function products() {
  return BASE_PRODUCTS.concat(read("listings"));
}
function byId(id) {
  const allProducts = products();
  for (let index = 0; index < allProducts.length; index++) {
    if (String(allProducts[index].id) === String(id)) return allProducts[index];
  }
  return undefined;
}
const categories = [
  "Smartphones",
  "Laptops & Desktops",
  "Gaming Accessories",
  "Computer Components",
  "Audio",
  "Tablets",
  "Wearables",
  "Other Electronics",
];
const categoryIcons = [
  "phone",
  "laptop",
  "controller",
  "cpu",
  "headphones",
  "tablet",
  "smartwatch",
  "plug",
];
const icon = (name) => `<i class="bi bi-${name}" aria-hidden="true"></i>`;
const shopLink = (key, value) =>
  `shop.html?${key}=${encodeURIComponent(value)}`;
const imageTag = (product, extra = "") =>
  `<img src="${esc(product.images[0])}" alt="${esc(product.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'" ${extra}>`;
const currentPage = location.pathname.split("/").pop() || "index.html";
let toastTimer;
function toast(message) {
  const element = getElement("#toast");
  if (!element) return;
  element.textContent = message;
  element.classList.remove("hide");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.add("hide"), 4200);
}
function updateCartCount() {
  const cart = read("cart");
  let count = 0;
  for (let index = 0; index < cart.length; index++)
    count = count + cart[index].qty;
  const badges = getAllElements(".cart-count");
  for (let index = 0; index < badges.length; index++)
    badges[index].textContent = count;
}
function addCart(id, buyNow = false) {
  const product = byId(id);
  if (!product || product.stock === 0) {
    toast("This product is sold out.");
    return;
  }
  const cart = read("cart");
  let existingItem = null;
  for (let index = 0; index < cart.length; index++) {
    if (String(cart[index].id) === String(id)) existingItem = cart[index];
  }
  if (existingItem) {
    if (existingItem.qty >= product.stock) {
      toast("You have reached the available quantity.");
      return;
    }
    existingItem.qty = existingItem.qty + 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }
  if (write("cart", cart)) {
    updateCartCount();
    if (buyNow) location.href = "cart.html";
    else toast("Added to your shopping bag.");
  }
}
function toggleFavorite(id) {
  const key = String(id);
  let favorites = read("favorites").map(String);
  favorites = favorites.includes(key)
    ? favorites.filter((item) => item !== key)
    : [...favorites, key];
  if (!write("favorites", favorites)) return;
  getAllElements(`[data-fav="${key}"]`).forEach((button) => {
    const saved = favorites.includes(key);
    button.classList.toggle("saved", saved);
    button.setAttribute("aria-pressed", saved);
    button.innerHTML = icon(saved ? "heart-fill" : "heart");
  });
  toast(
    favorites.includes(key) ? "Saved to favorites." : "Removed from favorites.",
  );
  if (currentPage === "account.html" && typeof renderAccount === "function")
    renderAccount();
  if (
    new URLSearchParams(location.search).has("favorites") &&
    typeof renderCatalog === "function"
  )
    renderCatalog();
}
function card(product) {
  const saved = read("favorites").map(String).includes(String(product.id));
  const discount =
    product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;
  return `<article class="product-card"><div class="product-art"><span class="condition ${product.condition === "Used" ? "used" : ""}">${product.condition === "Used" ? "USED · " + esc(product.grade).toUpperCase() : "BRAND NEW"}</span><button class="heart ${saved ? "saved" : ""}" data-fav="${product.id}" aria-label="Favorite ${esc(product.name)}" aria-pressed="${saved}">${icon(saved ? "heart-fill" : "heart")}</button><a href="product.html?id=${product.id}" aria-label="View ${esc(product.name)} details">${imageTag(product)}</a>${discount ? `<span class="discount">−${discount}% demo price</span>` : ""}</div><div class="product-meta"><small>${esc(product.brand)}</small><h3><a href="product.html?id=${product.id}">${esc(product.name)}</a></h3><div class="price-row"><span class="price">${peso(product.price)}</span>${discount ? `<span class="old-price">${peso(product.originalPrice)}</span>` : ""}</div><div class="card-bottom"><a href="product.html?id=${product.id}">View details ${icon("arrow-up-right")}</a><button class="quick-buy" data-cart="${product.id}" ${product.stock ? "" : "disabled"}>${product.stock ? "Quick buy +" : "Sold out"}</button></div></div></article>`;
}
function section(title, items, url = "shop.html", eyebrow = "CURATED FOR YOU") {
  return `<section class="section"><div class="section-head"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div><a href="${url}">View all ${icon("arrow-up-right")}</a></div><div class="product-grid">${items.length ? items.map(card).join("") : '<div class="empty">No matching products in this demo snapshot.</div>'}</div></section>`;
}
function showModal(title, body, footer = "") {
  getElement("#dialog-title").textContent = title;
  getElement("#dialog-body").innerHTML = body;
  getElement("#dialog-footer").innerHTML = footer;
  if (typeof bootstrap === "undefined") {
    toast(
      "Bootstrap could not load. Check your internet connection and reload.",
    );
    return;
  }
  bootstrap.Modal.getOrCreateInstance(getElement("#dialog")).show();
}
function hideModal() {
  bootstrap.Modal.getOrCreateInstance(getElement("#dialog")).hide();
}
function initShell() {
  document.documentElement.dataset.theme = read("theme", "dark");
  const nav = [
    ["Home", "index.html"],
    ["Shop", "shop.html"],
    ["Sell", "sell.html"],
    ["Market Trends", "market.html"],
    ["About", "about.html"],
    ["Contact", "contact.html"],
    [
      NexAuth.current() ? "Account" : "Log in",
      NexAuth.current() ? "account.html" : "login.html",
    ],
  ];
  getElement("#site-header").innerHTML = /* HTML */ `<div class="promo-strip">
      Great Tech Better Prices &nbsp; Discover a smarter way to buy & sell.
    </div>
    <header class="header">
      <div class="wrap header-main">
        <a class="logo" href="index.html"
          >Next<span>Market</span><sup style="font-size:10px">®</sup></a
        >
        <form class="search-box" action="shop.html" role="search">
          ${icon("search")}<input
            name="q"
            aria-label="Search electronics"
            placeholder="Search for your next upgrade…"
          /><button type="submit" class="icon-btn" aria-label="Search">
            ${icon("arrow-right")}
          </button>
        </form>
        <nav class="main-nav" aria-label="Main navigation">
          ${nav
            .slice(0, 6)
            .map(
              ([label, href], index) =>
                `<a class="${currentPage === href ? "active" : ""} ${index === 0 || index > 3 ? "secondary" : ""}" href="${href}">${label}</a>`,
            )
            .join("")}
        </nav>
        <div class="header-actions">
          <a
            href="${NexAuth.current() ? "account.html" : "login.html"}"
            class="icon-btn"
            aria-label="${NexAuth.current() ? "My account" : "Log in"}"
            >${icon("person-circle")}</a
          ><a
            href="shop.html?favorites=1"
            class="icon-btn"
            aria-label="Favorites"
            >${icon("heart")}</a
          ><a href="cart.html" class="icon-btn" aria-label="Shopping cart"
            >${icon("bag")}<span class="count cart-count">0</span></a
          ><button
            class="icon-btn"
            id="theme-toggle"
            aria-label="Toggle light or dark theme"
          >
            ${icon("sun")}</button
          ><button
            class="icon-btn mobile-menu"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobile-nav"
            aria-label="Open navigation"
          >
            ${icon("list")}
          </button>
        </div>
      </div>
      <nav class="wrap category-nav" aria-label="Product categories">
        <a href="shop.html">${icon("grid")} &nbsp; All Products</a
        ><a href="shop.html?condition=Brand%20New">Brand New</a
        ><a href="shop.html?condition=Used">Used / Pre-Loved</a>${[
          ["Smartphones", "Smartphones"],
          ["Laptops", "Laptops & Desktops"],
          ["Computers", "Computer Components"],
          ["Gaming", "Gaming Accessories"],
          ["Audio", "Audio"],
          ["Accessories", "Other Electronics"],
          ["More", "Tablets"],
        ]
          .map(
            ([label, category]) =>
              `<a href="${shopLink("category", category)}">${label}</a>`,
          )
          .join("")}
      </nav>
    </header>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="mobile-nav"
      aria-labelledby="mobile-title"
    >
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="mobile-title">Explore NEXTMARKET</h2>
        <button
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close navigation"
        ></button>
      </div>
      <div class="offcanvas-body">
        <nav>
          ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
      </div>
    </div>`;
  getElement("#site-footer").innerHTML = /* HTML */ `<footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="logo" href="index.html">NEXT<span>MARKET</span>®</a>
          <p>
            Your next upgrade starts here.<br />New possibilities. Pre-loved
            favorites. Fair prices.
          </p>

        </div>
        <div>
          <h4>Explore</h4>
          <a href="shop.html">Shop all electronics</a
          ><a href="sell.html">Start selling</a
          ><a href="market.html">Market trends</a
          ><a href="shop.html?favorites=1">Your favorites</a>
        </div>
        <div>
          <h4>Get to know us</h4>
          <a href="about.html">About NEXTMARKET</a
          ><a href="contact.html">Contact & FAQs</a
          ><a href="shipping.html">Shipping information</a
          ><a href="returns.html">Return policy</a>
        </div>
        <div>
          <h4>Made for your next</h4>
          <p>Buy with insight.<br />Give great tech a second life.</p>
          <a href="sell.html">Become a seller ${icon("arrow-up-right")}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 NEXTMARKET. Academic demonstration project.</span
        ><span>Simulated prices & transactions. No real payments.</span>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="toast" class="toast-message hide" role="status" aria-live="polite"></div><div class="modal fade" id="dialog" tabindex="-1" aria-labelledby="dialog-title"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h2 class="modal-title fs-5" id="dialog-title"></h2><button class="btn-close" data-bs-dismiss="modal" aria-label="Close dialog"></button></div><div class="modal-body" id="dialog-body"></div><div class="modal-footer" id="dialog-footer"></div></div></div></div>`,
  );
  getElement("#theme-toggle").onclick = () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    write("theme", theme);
    if (typeof refreshChart === "function") refreshChart();
  };
  document.addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-fav]"),
      cart = event.target.closest("[data-cart]");
    if (favorite) toggleFavorite(favorite.dataset.fav);
    if (cart) addCart(cart.dataset.cart);
  });
  updateCartCount();
}
initShell();
