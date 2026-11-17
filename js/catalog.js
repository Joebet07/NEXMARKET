// STUDY: filterProducts uses a loop and skip checks. The rest connects that logic to the form controls.
/* AND between filter groups; OR between checkboxes in the same group. */
const query = new URLSearchParams(location.search);
const filterState = {
  q: query.get("q") || "",
  category: query.get("category") ? [query.get("category")] : [],
  brand: query.get("brand") ? [query.get("brand")] : [],
  condition: query.get("condition") || "",
  grade: [],
  min: 0,
  max: 150000,
  availability: "",
  sort: query.get("sort") || "featured",
  favorites: query.has("favorites"),
};
// Check one product at a time. A product is included only if it passes every group.
function filterProducts(list, state, favorites = []) {
  const results = [];
  for (let index = 0; index < list.length; index++) {
    const product = list[index];
    const searchText = (
      product.name +
      " " +
      product.brand +
      " " +
      product.category +
      " " +
      product.description
    ).toLowerCase();

    if (!searchText.includes(state.q.trim().toLowerCase())) continue;
    if (state.category.length > 0 && !state.category.includes(product.category))
      continue;
    if (state.brand.length > 0 && !state.brand.includes(product.brand))
      continue;
    if (state.condition !== "" && product.condition !== state.condition)
      continue;
    if (state.grade.length > 0 && !state.grade.includes(product.grade))
      continue;
    if (product.price < state.min || product.price > state.max) continue;
    if (state.availability === "available" && product.stock === 0) continue;
    if (state.availability === "sold" && product.stock > 0) continue;

    // IDs are compared as text because URLs and form inputs contain text.
    if (state.favorites) {
      let isFavorite = false;
      for (
        let favoriteIndex = 0;
        favoriteIndex < favorites.length;
        favoriteIndex++
      ) {
        if (String(favorites[favoriteIndex]) === String(product.id))
          isFavorite = true;
      }
      if (!isFavorite) continue;
    }
    results.push(product);
  }
  return results;
}
const sorts = {
  featured: (a, b) => b.popularity - a.popularity,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  recent: (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded),
  name: (a, b) => a.name.localeCompare(b.name),
  popular: (a, b) => b.popularity - a.popularity,
};
function checkboxes(name, values) {
  return values
    .map(
      (value) =>
        `<label><input type="checkbox" name="${name}" value="${esc(value)}" ${filterState[name].includes(value) ? "checked" : ""}>${esc(value)}</label>`,
    )
    .join("");
}
getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
  <div class="page-head">
    <div class="eyebrow">FIND YOUR NEXT UPGRADE</div>
    <h1>
      ${filterState.favorites ? "Your saved finds." : "Good tech. Great possibilities."}
    </h1>
    <p class="muted">
      Discover brand-new favorites and pre-loved gems, all in one place.
    </p>
  </div>
  <div class="catalog-layout">
    <aside
      class="offcanvas-lg offcanvas-start"
      tabindex="-1"
      id="filters"
      aria-labelledby="filter-title"
    >
      <div class="offcanvas-header">
        <h2 id="filter-title">Filters</h2>
        <button
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#filters"
          aria-label="Close filters"
        ></button>
      </div>
      <div class="offcanvas-body d-block">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="mb-0">Filters</h3>
          <button id="clear-filters" class="quick-buy">Clear all</button>
        </div>
        <details class="filter-group" open>
          <summary>Category</summary>
          ${checkboxes("category", categories)}
        </details>
        <details class="filter-group" open>
          <summary>Condition</summary>
          ${["", "Brand New", "Used"].map((condition) => `<label><input type="radio" name="condition" value="${condition}" ${filterState.condition === condition ? "checked" : ""}>${condition || "All conditions"}</label>`).join("")}
        </details>
        <details class="filter-group">
          <summary>Pre-loved grade</summary>
          ${checkboxes("grade", ["Like New", "Excellent", "Good", "Fair"])}
        </details>
        <details class="filter-group" open>
          <summary>Price range</summary>
          <label for="min-price">Minimum <span id="min-label">₱0</span></label
          ><input
            type="range"
            id="min-price"
            min="0"
            max="150000"
            step="500"
            value="0"
            class="range"
          /><label for="max-price"
            >Maximum <span id="max-label">₱150,000</span></label
          ><input
            type="range"
            id="max-price"
            min="0"
            max="150000"
            step="500"
            value="150000"
            class="range"
          />
        </details>
        <details class="filter-group" open>
          <summary>Brand</summary>
          ${checkboxes("brand", [...new Set(["Apple", "Samsung", "ASUS", "Acer", "Lenovo", "Sony", "Logitech", "Razer", ...products().map((p) => p.brand)])].sort())}
        </details>
        <details class="filter-group">
          <summary>Availability</summary>
          <label
            ><input name="availability" type="radio" value="" checked />All
            products</label
          ><label
            ><input
              name="availability"
              type="radio"
              value="available"
            />Available now</label
          ><label
            ><input name="availability" type="radio" value="sold" />Sold
            out</label
          >
        </details>
      </div>
    </aside>
    <section>
      <form id="catalog-search" class="search-box mb-3">
        ${icon("search")}<input
          aria-label="Search catalog"
          placeholder="Search products, brands or keywords…"
          value="${esc(filterState.q)}"
        /><button class="icon-btn" aria-label="Search catalog now">
          ${icon("arrow-right")}
        </button>
      </form>
      <div class="catalog-toolbar">
        <span
          class="muted"
          id="result-count"
          role="status"
          aria-live="polite"
        ></span
        ><button
          class="btn btn-outline filter-mobile"
          data-bs-toggle="offcanvas"
          data-bs-target="#filters"
        >
          ${icon("sliders")} Filters</button
        ><label class="d-flex align-items-center gap-2"
          ><span class="note">Sort by</span
          ><select id="sort" class="field">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="recent">Recently added</option>
            <option value="name">Name: A–Z</option>
            <option value="popular">Most popular</option>
          </select></label
        >
      </div>
      <div id="catalog-grid" class="product-grid"></div>
    </section>
  </div>
  <p class="note mt-4">
    Prices and popularity are simulated. Your own listings and favorites are
    saved only in this browser.
  </p>
</div>`;
getElement("#sort").value = sorts[filterState.sort]
  ? filterState.sort
  : "featured";
// Expand the price ceiling to include higher-priced user listings.
const priceCeiling = Math.max(
  150000,
  ...products().map((p) => Math.ceil(p.price / 500) * 500),
);
filterState.max = priceCeiling;
getElement("#min-price").max = priceCeiling;
getElement("#max-price").max = priceCeiling;
getElement("#max-price").value = priceCeiling;
getElement("#max-label").textContent = peso(priceCeiling);
function renderCatalog() {
  const list = filterProducts(products(), filterState, read("favorites")).sort(
    sorts[filterState.sort] || sorts.featured,
  );
  getElement("#result-count").textContent =
    `${list.length} ${list.length === 1 ? "product" : "products"}`;
  getElement("#catalog-grid").innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty">${icon("search")}<h3 class="mt-3">No matching finds just yet.</h3><p>Try a different search or clear your filters.</p><button class="btn btn-mint" id="empty-clear">Clear filters</button>${filterState.favorites ? '<p class="mt-3">Use a product’s heart button to save it here.</p>' : ""}</div>`;
  if (getElement("#empty-clear"))
    getElement("#empty-clear").onclick = clearFilters;
}
function clearFilters() {
  Object.assign(filterState, {
    q: "",
    category: [],
    brand: [],
    condition: "",
    grade: [],
    min: 0,
    max: priceCeiling,
    availability: "",
    sort: "featured",
  });
  getAllElements("#filters input[type=checkbox]").forEach(
    (input) => (input.checked = false),
  );
  getAllElements("#filters input[type=radio]").forEach(
    (input) => (input.checked = input.value === ""),
  );
  getElement("#catalog-search input").value = "";
  getElement("#sort").value = "featured";
  getElement("#min-price").value = 0;
  getElement("#max-price").value = priceCeiling;
  getElement("#min-label").textContent = peso(0);
  getElement("#max-label").textContent = peso(priceCeiling);
  renderCatalog();
}
getElement("#clear-filters").onclick = clearFilters;
getElement("#filters").addEventListener("change", (event) => {
  const name = event.target.name;
  if (["category", "brand", "grade"].includes(name))
    filterState[name] = getAllElements(
      `#filters input[name="${name}"]:checked`,
    ).map((input) => input.value);
  else if (name) filterState[name] = event.target.value;
  renderCatalog();
});
["min", "max"].forEach((kind) =>
  getElement("#" + kind + "-price").addEventListener("input", (event) => {
    filterState[kind] = Number(event.target.value);
    if (filterState.min > filterState.max) {
      const opposite = kind === "min" ? "max" : "min";
      filterState[opposite] = filterState[kind];
      getElement("#" + opposite + "-price").value = filterState[kind];
    }
    getElement("#min-label").textContent = peso(filterState.min);
    getElement("#max-label").textContent = peso(filterState.max);
    renderCatalog();
  }),
);
getElement("#catalog-search").onsubmit = (event) => event.preventDefault();
getElement("#catalog-search input").oninput = (event) => {
  filterState.q = event.target.value;
  renderCatalog();
};
getElement("#sort").onchange = (event) => {
  filterState.sort = event.target.value;
  renderCatalog();
};
renderCatalog();
