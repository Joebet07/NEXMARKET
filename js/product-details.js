/* One dynamic detail page serves every product through its URL id. */
const product = byId(new URLSearchParams(location.search).get("id"));
if (!product) {
  getElement("#main").innerHTML =
    '<div class="wrap"><div class="empty my-5"><h1>Product not found</h1><p>This listing may have been removed.</p><a class="btn btn-mint" href="shop.html">Explore the catalog</a></div></div>';
} else {
  const p = product,
    saved = read("favorites").map(String).includes(String(p.id));
  document.title = p.name + " | NEXTMARKET";
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <div class="breadcrumbs">
      <a href="index.html">Home</a> &nbsp;/&nbsp;
      <a href="${shopLink("category", p.category)}">${esc(p.category)}</a>
      &nbsp;/&nbsp; ${esc(p.name)}
    </div>
    <div class="detail-layout">
      <div>
        <div class="gallery-main">
          <img
            id="main-photo"
            src="${esc(p.images[0])}"
            alt="${esc(p.name)}"
            onerror="this.src='assets/images/fallback.svg';this.onerror=null"
          /><button class="gallery-arrow prev" aria-label="Previous photo">
            ${icon("chevron-left")}</button
          ><button class="gallery-arrow next" aria-label="Next photo">
            ${icon("chevron-right")}</button
          ><button
            class="btn btn-outline zoom"
            id="zoom"
            aria-label="Enlarge image"
          >
            ${icon("arrows-fullscreen")}
          </button>
        </div>
        <div class="thumbnails">
          ${p.images.map((source, index) => `<button data-image="${index}" class="${index === 0 ? "active" : ""}" aria-label="View product photo ${index + 1}"><img src="${esc(source)}" alt="${esc(p.name)} view ${index + 1}" onerror="this.onerror=null;this.src='assets/images/fallback.svg'"></button>`).join("")}
        </div>
        ${p.images.length === 1 ? '<p class="note mt-2">One photo available for this listing.</p>' : ""}
      </div>
      <div class="detail-info">
        <div class="eyebrow">${esc(p.brand)} / ${esc(p.category)}</div>
        <h1>${esc(p.name)}</h1>
        <span class="pill"
          >${esc(p.condition)}${p.grade ? " · " + esc(p.grade) : ""}</span
        >
        <span class="note ms-2"
          >${p.stock ? p.stock + " available" : "Sold out"}</span
        >
        <div class="market-summary">
          <div>
            <small>LOWEST ASK</small><strong>${peso(p.lowestAsk)}</strong>
          </div>
          <div>
            <small>HIGHEST BID</small
            ><strong id="highest-bid"
              >${p.highestBid ? peso(p.highestBid) : "No bids yet"}</strong
            >
          </div>
        </div>
        <small>BUY NOW / SELLER’S ASKING PRICE</small>
        <div class="buy-price">
          ${peso(p.price)}
          <span class="old-price"
            >${p.originalPrice > p.price ? peso(p.originalPrice) : ""}</span
          >
        </div>
        <div class="action-stack">
          <button
            id="buy-now"
            class="btn btn-mint"
            ${p.stock ? "" : "disabled"}
          >
            Buy now &nbsp; ${icon("arrow-up-right")}</button
          ><button
            id="offer"
            class="btn btn-outline"
            ${p.stock ? "" : "disabled"}
          >
            Make an offer
          </button>
        </div>
        <div class="action-stack">
          <button
            class="btn btn-outline"
            data-cart="${p.id}"
            ${p.stock ? "" : "disabled"}
          >
            ${icon("bag-plus")} &nbsp; Add to cart</button
          ><button
            class="btn btn-outline ${saved ? "saved" : ""}"
            data-fav="${p.id}"
            aria-label="Save to favorites"
            aria-pressed="${saved}"
          >
            ${icon(saved ? "heart-fill" : "heart")}</button
          ><button
            class="btn btn-outline"
            id="share"
            aria-label="Share this product"
          >
            ${icon("share")}
          </button>
        </div>
        <p class="note mt-4">
          ${icon("truck")} &nbsp; Demo shipping: ₱150 · Estimated 3–7 business
          days.<br />${icon("arrow-repeat")} &nbsp;
          <a href="returns.html">See sample return eligibility</a
          >.<br />${icon("info-circle")} &nbsp; Simulated marketplace. No real
          payments are taken.
        </p>
        <p class="note">
          Seller: <strong>${esc(p.seller)}</strong><br />Recent simulated sale:
          ${p.history.length ? peso(p.history.at(-1).price) : "No sale history yet"}
        </p>
      </div>
    </div>
    ${chartPanel()}
    <div class="info-grid">
      <section class="panel">
        <h2>Made for your everyday.</h2>
        <p class="muted mt-3">${esc(p.description)}</p>
        <h3 class="mt-4">Seller information</h3>
        <p class="muted">
          ${esc(p.seller)}<br />${p.local ? "Your browser-local listing." : "Sample seller profile. Identity and condition are illustrative, not independently verified."}
        </p>
        <h3>Shipping & returns</h3>
        <p class="note">
          <a href="shipping.html"
            >View sample delivery options ${icon("arrow-up-right")}</a
          ><br /><a href="returns.html"
            >Read the demonstration return policy ${icon("arrow-up-right")}</a
          >
        </p>
      </section>
      <section class="panel">
        <h2>Technical specifications</h2>
        <p class="note">
          Sample listing configurations are for demonstration. Verify the exact
          model and specifications before a real purchase.
        </p>
        <table class="spec-table">
          <tbody>
            ${Object.entries(p.specs)
              .map(
                ([key, value]) =>
                  `<tr><td>${esc(key)}</td><td>${esc(value)}</td></tr>`,
              )
              .join("")}
            <tr>
              <td>Condition</td>
              <td>${esc(p.condition)} ${esc(p.grade)}</td>
            </tr>
          </tbody>
        </table>
        <h3 class="mt-4">Buy / sell summary</h3>
        <table class="spec-table">
          <tbody>
            ${[
              ["Lowest ask", peso(p.lowestAsk)],
              ["Highest bid", p.highestBid ? peso(p.highestBid) : "None yet"],
              [
                "Last sold",
                p.history.length
                  ? peso(p.history.at(-1).price)
                  : "No sales yet",
              ],
              ["Recorded sales", p.history.length],
              ["Current listing", peso(p.price)],
            ]
              .map(
                ([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </div>
    ${section(
      "You might also like.",
      products()
        .filter((other) => other.category === p.category && other.id !== p.id)
        .slice(0, 4),
      shopLink("category", p.category),
      "RELATED FINDS",
    )}${section(
      "Give great tech a second life.",
      products()
        .filter((other) => other.condition === "Used" && other.id !== p.id)
        .sort(
          (a, b) => (b.category === p.category) - (a.category === p.category),
        )
        .slice(0, 4),
      "shop.html?condition=Used",
      "SIMILAR PRE-LOVED TECH",
    )}
  </div>`;
  let photo = 0;
  function setPhoto(index) {
    photo = (index + p.images.length) % p.images.length;
    getElement("#main-photo").src = p.images[photo];
    getAllElements("[data-image]").forEach((button) =>
      button.classList.toggle("active", Number(button.dataset.image) === photo),
    );
  }
  getAllElements("[data-image]").forEach(
    (button) => (button.onclick = () => setPhoto(Number(button.dataset.image))),
  );
  getElement(".gallery-arrow.prev").onclick = () => setPhoto(photo - 1);
  getElement(".gallery-arrow.next").onclick = () => setPhoto(photo + 1);
  if (p.images.length === 1) {
    getElement(".gallery-arrow.prev").disabled = true;
    getElement(".gallery-arrow.next").disabled = true;
  }
  getElement("#zoom").onclick = () =>
    showModal(
      p.name,
      `<img src="${esc(p.images[photo])}" alt="${esc(p.name)} enlarged" style="width:100%;max-height:70vh;object-fit:contain">`,
    );
  getElement("#buy-now").onclick = () => addCart(p.id, true);
  getElement("#share").onclick = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      toast("Product link copied.");
    } catch {
      showModal(
        "Share product",
        `<label for="share-url" class="form-label">Copy this link</label><input class="form-control" id="share-url" readonly value="${esc(location.href)}">`,
      );
    }
  };
  getElement("#offer").onclick = () => {
    showModal(
      "Make an offer",
      `<p>${esc(p.name)}</p><p class="note">Offers are simulated and saved in this browser. Nothing is sent to the seller.</p><form id="offer-form"><label for="offer-amount" class="form-label">Your offer (₱)</label><input class="form-control" id="offer-amount" type="number" min="0.01" max="10000000" step="0.01" required placeholder="Enter your offer"><button class="btn btn-mint mt-3" type="submit">Submit demo offer</button></form>`,
    );
    getElement("#offer-form").onsubmit = (event) => {
      event.preventDefault();
      const amount = Number(getElement("#offer-amount").value);
      if (!Number.isFinite(amount) || amount <= 0 || amount > 10000000) {
        toast("Enter a valid positive offer.");
        return;
      }
      const offers = read("offers");
      offers.push({ productId: p.id, amount, date: new Date().toISOString() });
      if (write("offers", offers)) {
        hideModal();
        toast("Your demo offer of " + peso(amount) + " was saved.");
      }
    };
  };
  mountChart(p);
}
