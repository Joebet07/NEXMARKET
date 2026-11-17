const marketProducts = products().filter(
  (product) => !product.local || product.history.length,
);
getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
  <div class="page-head">
    <div class="eyebrow">INSIGHT BEFORE YOUR NEXT UPGRADE</div>
    <h1>Know the market. Find your moment.</h1>
    <p class="muted">
      Explore transaction history and discover what’s moving in our demo market.
    </p>
  </div>
  <label for="market-product" class="form-label">Explore a product</label
  ><select class="form-select" id="market-product">
    ${marketProducts.map((product) => `<option value="${product.id}">${esc(product.name)} — ${esc(product.condition)} ${product.grade ? "(" + esc(product.grade) + ")" : ""}</option>`).join("")}</select
  >${chartPanel()}${section(
    "Getting the attention.",
    marketProducts
      .slice()
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4),
    "shop.html?sort=popular",
    "TRENDING / MOST VIEWED IN THE DEMO",
  )}${section("Moving upward.", marketProducts.filter((product) => historyStats(historyFor(product, "7D")).change > 0).slice(0, 4), "shop.html", "INCREASING PRICES / 7 DAYS")}${section("A little more within reach.", marketProducts.filter((product) => historyStats(historyFor(product, "7D")).change < 0).slice(0, 4), "shop.html", "DECREASING PRICES / 7 DAYS")}${section(
    "Recently exchanged.",
    marketProducts
      .slice()
      .sort(
        (a, b) =>
          new Date(b.history.at(-1)?.date || 0) -
          new Date(a.history.at(-1)?.date || 0),
      )
      .slice(4, 8),
    "shop.html",
    "RECENT SIMULATED SALES",
  )}${section(
    "Popular. Fresh. Ready.",
    marketProducts
      .filter((product) => product.condition === "Brand New")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(4, 8),
    "shop.html?condition=Brand%20New",
    "POPULAR BRAND NEW",
  )}${section(
    "The second-life favorites.",
    marketProducts
      .filter((product) => product.condition === "Used")
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4),
    "shop.html?condition=Used",
    "POPULAR PRE-LOVED",
  )}
  <p class="note">
    All activity uses fixed sample records. Rankings are not claims about real
    demand. Snapshot: 13 November 2026.
  </p>
</div>`;
getElement("#market-product").onchange = (event) =>
  mountChart(byId(event.target.value));
mountChart(marketProducts[0]);
