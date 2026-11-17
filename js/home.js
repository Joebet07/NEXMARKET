/* Homepage sections reuse the same product-card function as the catalog. */
const homeProducts = products();
getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">THE NEXT GENERATION OF BUY & SELL</div>
      <h1>Buy Smarter.<br /><em>Sell Better.</em></h1>
      <p>Discover brand-new and pre-loved electronics at the right price.</p>
      <div class="hero-actions">
        <a href="shop.html" class="btn btn-mint"
          >Shop now &nbsp; ${icon("arrow-up-right")}</a
        ><a href="sell.html" class="btn btn-outline">Start selling</a>
      </div>
      <div class="hero-fineprint">
        ${icon("check2-circle")} &nbsp; New & pre-loved &nbsp; · &nbsp; Price
        insights &nbsp; · &nbsp; More possibilities
      </div>
    </div>
    <div class="hero-art">
      ${imageTag(homeProducts[0], 'fetchpriority="high"')}<a
        href="product.html?id=101"
        class="hero-label"
        ><span class="eyebrow">IN THE SPOTLIGHT</span
        ><strong>Apple AirPods Max</strong
        ><span
          >From ${peso(homeProducts[0].price)} &nbsp;
          ${icon("arrow-up-right")}</span
        ></a
      >
    </div>
  </section>
  <div class="trust-row" aria-label="Why choose NEXTMARKET">
    <span>${icon("patch-check")} Clear condition grades</span
    ><span>${icon("graph-up-arrow")} Compare price insights</span
    ><span>${icon("arrow-repeat")} A second life for great tech</span
    ><span>${icon("shield-check")} No-payment demo experience</span>
  </div>
  ${section("Your next obsession.", homeProducts.slice(0, 4), "shop.html", "THE EDIT / FEATURED PRODUCTS")}
  <section class="section">
    <div class="section-head">
      <div>
        <div class="eyebrow">FIND YOUR KIND OF TECH</div>
        <h2>Shop by category</h2>
      </div>
      <a href="shop.html">Explore all ${icon("arrow-up-right")}</a>
    </div>
    <div class="categories">
      ${[0, 1, 4, 2, 3, 7].map((index) => `<a class="category-tile" href="${shopLink("category", categories[index])}">${icon(categoryIcons[index])}<span>${["Smartphones", "Laptops & desktops", "Gaming", "Components", "Audio", "Tablets", "Wearables", "Accessories"][index]}</span></a>`).join("")}
    </div>
  </section>
  <div class="split-banners">
    <section class="mini-banner">
      <div>
        <div class="eyebrow">FRESH OUT OF THE BOX</div>
        <h2>New tech.<br />New possibilities.</h2>
        <a href="shop.html?condition=Brand%20New" class="btn btn-mint mt-2"
          >Shop brand new ${icon("arrow-up-right")}</a
        >
      </div>
      ${imageTag(homeProducts[1])}
    </section>
    <section class="mini-banner">
      <div>
        <div class="eyebrow">LESS SPEND. MORE POSSIBILITY.</div>
        <h2>Pre-loved.<br />Ready for you.</h2>
        <a href="shop.html?condition=Used" class="btn btn-outline mt-2"
          >Discover pre-loved ${icon("arrow-up-right")}</a
        >
      </div>
      ${imageTag(homeProducts[2])}
    </section>
  </div>
  ${section("Just landed.", homeProducts.slice(4, 8), "shop.html?sort=recent", "BRAND NEW ARRIVALS")}${section("Great tech. Second chapter.", homeProducts.filter((p) => p.condition === "Used").slice(0, 4), "shop.html?condition=Used", "PRE-LOVED DEALS")}
  <section class="section">
    <div class="section-head">
      <div>
        <div class="eyebrow">THE NAMES YOU KNOW</div>
        <h2>Big brands. Better finds.</h2>
      </div>
    </div>
    <div class="brands">
      ${["Apple", "Samsung", "ASUS", "Sony", "Logitech", "Razer"].map((brand) => `<a href="${shopLink("brand", brand)}" aria-label="Shop ${brand}">${brand === "Apple" ? icon("apple") : brand}</a>`).join("")}
    </div>
  </section>
  <section class="section">
    <div class="section-head">
      <div>
        <div class="eyebrow">ON EVERYONE’S RADAR</div>
        <h2>Trending in the demo market</h2>
      </div>
      <div class="carousel-controls">
        <button id="trend-prev" aria-label="Previous trending products">
          ${icon("arrow-left")}</button
        ><button id="trend-next" aria-label="Next trending products">
          ${icon("arrow-right")}
        </button>
      </div>
    </div>
    <div class="product-grid" id="trending-grid"></div>
  </section>
  <section class="section">
    <div class="section-head">
      <div>
        <div class="eyebrow">LESS FRICTION. MORE POSSIBILITIES.</div>
        <h2>Your upgrade, simplified.</h2>
      </div>
    </div>
    <div class="steps">
      <div class="step">
        <span class="number">01 / DISCOVER</span>
        <h3>Find your perfect fit.</h3>
        <p>
          Explore electronics by brand, budget and condition. Save the ones you
          love.
        </p>
      </div>
      <div class="step">
        <span class="number">02 / COMPARE</span>
        <h3>Know the numbers.</h3>
        <p>
          Compare asking prices and simulated sale history before making your
          offer.
        </p>
      </div>
      <div class="step">
        <span class="number">03 / MAKE IT YOURS</span>
        <h3>Upgrade your everyday.</h3>
        <p>
          Try the demo checkout or list your own tech and give it a new
          beginning.
        </p>
      </div>
    </div>
  </section>
  <section class="sell-banner">
    <div>
      <div class="eyebrow" style="color:#294936">
        YOUR OLD TECH. SOMEONE’S NEXT UPGRADE.
      </div>
      <h2 class="mt-2">Good tech deserves another chapter.</h2>
      <p class="mb-0">
        Turn the electronics you no longer use into your next possibility.
      </p>
    </div>
    <a href="sell.html" class="btn"
      >List your device &nbsp; ${icon("arrow-up-right")}</a
    >
  </section>
  <p class="note mt-3">
    All prices, promotions and marketplace activity are illustrative demo
    content.
  </p>
</div>`;
let trendingOffset = 0;
function renderTrending() {
  getElement("#trending-grid").innerHTML = homeProducts
    .slice(trendingOffset, trendingOffset + 4)
    .map(card)
    .join("");
}
getElement("#trend-next").onclick = () => {
  trendingOffset = (trendingOffset + 4) % 12;
  renderTrending();
};
getElement("#trend-prev").onclick = () => {
  trendingOffset = (trendingOffset + 8) % 12;
  renderTrending();
};
renderTrending();
