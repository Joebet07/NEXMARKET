// EXTENSION: validate form values, review a listing, then save it. Photo resizing is a reusable helper.
if (!NexAuth.current()) {
  getElement("#main").innerHTML =
    '<div class="wrap"><section class="empty my-5"><h1>Your next chapter starts here.</h1><p>Log in to your demo account to create and manage your own listings.</p><a class="btn btn-mint" href="login.html?next=sell.html">Log in to sell</a> <a class="btn btn-outline" href="signup.html?next=sell.html">Create account</a></section></div>';
} else {
  /* Browser-local listings: image upload, review, publication, editing and removal. */
  let editingId = null,
    uploadImages = [],
    imageBusy = false;
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <div class="page-head">
      <div class="eyebrow">MAKE ROOM FOR YOUR NEXT</div>
      <h1>Great tech deserves a second life.</h1>
      <p class="muted">
        Create your listing. Set your price. Find a new beginning.
      </p>
    </div>
    <div class="info-grid">
      <section class="panel">
        <h2 id="form-heading">Tell us about your tech</h2>
        <p class="note">
          Demo listings are saved only in this browser, never published to a
          real marketplace. Browser storage is limited.
        </p>
        <form id="sell-form" class="form-grid mt-4">
          <div class="full">
            <label class="form-label" for="product-name">Product name</label
            ><input
              id="product-name"
              name="name"
              class="form-control"
              required
              maxlength="100"
              placeholder="e.g. Apple iPhone 13 Pro 128GB"
            />
          </div>
          <div>
            <label class="form-label" for="product-brand">Brand</label
            ><input
              id="product-brand"
              name="brand"
              class="form-control"
              required
              maxlength="40"
              list="brands"
            /><datalist id="brands">
              ${["Apple", "Samsung", "ASUS", "Acer", "Lenovo", "Sony", "Logitech", "Razer"].map((brand) => `<option>${brand}</option>`).join("")}
            </datalist>
          </div>
          <div>
            <label class="form-label" for="product-category">Category</label
            ><select id="product-category" name="category" class="form-select">
              ${categories.map((category) => `<option>${category}</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="form-label" for="condition">Condition</label
            ><select id="condition" name="condition" class="form-select">
              <option>Brand New</option>
              <option>Used</option>
            </select>
          </div>
          <div id="grade-wrap" class="hide">
            <label class="form-label" for="grade">Used condition grade</label
            ><select id="grade" name="grade" class="form-select">
              <option>Like New</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div class="full">
            <label class="form-label" for="description">Description</label
            ><textarea
              id="description"
              name="description"
              class="form-control"
              required
              rows="4"
              maxlength="2000"
              placeholder="Describe the device, accessories, wear and any defects."
            ></textarea>
          </div>
          <div class="full">
            <label class="form-label" for="specifications">Specifications</label
            ><textarea
              id="specifications"
              name="specifications"
              class="form-control"
              required
              rows="3"
              maxlength="1500"
              placeholder="Storage: 128GB&#10;Color: Graphite&#10;Battery health: 90%"
            ></textarea
            ><small class="note"
              >Use one specification per line, in Label: Value format.</small
            >
          </div>
          <div>
            <label class="form-label" for="asking-price">Asking price (₱)</label
            ><input
              type="number"
              min="0.01"
              max="10000000"
              step="0.01"
              id="asking-price"
              name="price"
              class="form-control"
              required
            />
          </div>
          <div>
            <label class="form-label" for="stock">Available quantity</label
            ><input
              type="number"
              min="0"
              max="999"
              step="1"
              id="stock"
              name="stock"
              class="form-control"
              value="1"
              required
            />
          </div>
          <div class="full">
            <label class="form-label" for="seller-name"
              >Seller display name</label
            ><input
              id="seller-name"
              name="seller"
              class="form-control"
              required
              maxlength="60"
              placeholder="Your shop or display name"
            />
          </div>
          <div class="full">
            <label class="form-label" for="product-images"
              >Product images (up to 3)</label
            ><input
              id="product-images"
              class="form-control"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
            />
            <p class="note mt-2">
              JPEG, PNG or WebP, up to 10 MB each. Images are resized
              automatically. Add at least one image.
            </p>
            <p
              id="upload-status"
              class="note"
              role="status"
              aria-live="polite"
            ></p>
            <div id="image-previews" class="image-previews"></div>
          </div>
          <div class="full d-flex gap-2">
            <button type="submit" class="btn btn-mint" id="review-listing">
              Review listing ${icon("arrow-up-right")}</button
            ><button type="button" id="reset-listing" class="btn btn-outline">
              Reset
            </button>
          </div>
        </form>
      </section>
      <aside>
        <div class="panel">
          <div class="eyebrow">YOUR LISTING AT A GLANCE</div>
          <h2 class="mt-3" id="preview-name">Your next great listing</h2>
          <div id="preview-image" class="image-previews my-3"></div>
          <div class="buy-price" id="preview-price">₱0</div>
          <p class="note">Your asking price • no real fees or payments</p>
          <hr style="border-color:var(--line)" />
          <h3>A better listing starts here.</h3>
          <p class="muted">
            Use clear photos, describe the condition honestly, and include the
            details you would want to know as a buyer.
          </p>
          <p class="note">
            Like New: minimal signs of use.<br />Excellent: light cosmetic
            wear.<br />Good: visible wear, fully functional.<br />Fair: heavier
            wear; disclose all defects.
          </p>
        </div>
      </aside>
    </div>
    <section class="section panel">
      <div class="section-head">
        <h2>My listings</h2>
        <span class="demo-tag">SAVED ON THIS DEVICE</span>
      </div>
      <div id="my-listings"></div>
    </section>
  </div>`;
  function renderListings() {
    const listings = read("listings").filter(
      (product) => product.ownerId === NexAuth.current().id,
    );
    getElement("#my-listings").innerHTML = listings.length
      ? listings
          .map(
            (product) =>
              `<div class="listing-row">${imageTag(product)}<div class="row-copy"><h3><a href="product.html?id=${product.id}">${esc(product.name)}</a></h3><span class="note">${esc(product.condition)} · ${product.stock} available</span><div class="mt-1">${peso(product.price)}</div></div><button class="btn btn-outline" data-edit="${product.id}">Edit</button><button class="btn btn-outline" data-delete="${product.id}">Delete</button></div>`,
          )
          .join("")
      : '<div class="empty"><h3>Your first listing starts above.</h3><p>Published demo listings appear here and in the catalog.</p></div>';
  }
  function updateImagePreviews() {
    getElement("#image-previews").innerHTML = uploadImages
      .map(
        (source) => `<img src="${esc(source)}" alt="Uploaded listing preview">`,
      )
      .join("");
    getElement("#preview-image").innerHTML = uploadImages[0]
      ? `<img src="${esc(uploadImages[0])}" alt="Listing preview">`
      : "";
  }
  function resetListing() {
    editingId = null;
    uploadImages = [];
    getElement("#sell-form").reset();
    getElement("#grade-wrap").classList.add("hide");
    updateImagePreviews();
    getElement("#preview-name").textContent = "Your next great listing";
    getElement("#preview-price").textContent = peso(0);
    getElement("#form-heading").textContent = "Tell us about your tech";
    getElement("#upload-status").textContent = "";
  }
  getElement("#reset-listing").onclick = resetListing;
  getElement("#condition").onchange = (event) =>
    getElement("#grade-wrap").classList.toggle(
      "hide",
      event.target.value !== "Used",
    );
  getElement("#product-name").oninput = (event) =>
    (getElement("#preview-name").textContent =
      event.target.value || "Your next great listing");
  getElement("#asking-price").oninput = (event) =>
    (getElement("#preview-price").textContent = peso(
      Number(event.target.value),
    ));
  function resizedImage(file) {
    return new Promise((resolve, reject) => {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        reject(Error("Choose JPEG, PNG or WebP images."));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(Error("The image could not be read."));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () =>
          reject(Error("The selected image file is damaged."));
        image.onload = () => {
          const canvas = document.createElement("canvas"),
            ratio = Math.min(1, 700 / image.width, 700 / image.height);
          canvas.width = Math.max(1, Math.round(image.width * ratio));
          canvas.height = Math.max(1, Math.round(image.height * ratio));
          const context = canvas.getContext("2d");
          context.fillStyle = "#eeeeee";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.75));
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }
  getElement("#product-images").onchange = async (event) => {
    const files = [...event.target.files];
    if (!files.length) return;
    if (files.length > 3) {
      toast("Choose up to three images.");
      event.target.value = "";
      return;
    }
    if (files.some((file) => file.size > 10 * 1024 * 1024)) {
      toast("Each image must be smaller than 10 MB.");
      event.target.value = "";
      return;
    }
    imageBusy = true;
    getElement("#review-listing").disabled = true;
    getElement("#reset-listing").disabled = true;
    getElement("#upload-status").textContent = "Preparing your photos…";
    try {
      uploadImages = await Promise.all(files.map(resizedImage));
      updateImagePreviews();
      getElement("#upload-status").textContent =
        uploadImages.length + " image(s) ready.";
    } catch (error) {
      getElement("#upload-status").textContent = error.message;
      toast(error.message);
    } finally {
      imageBusy = false;
      getElement("#review-listing").disabled = false;
      getElement("#reset-listing").disabled = false;
    }
  };
  function specificationsFromText(text) {
    const specifications = Object.create(null);
    text
      .split("\n")
      .filter((line) => line.trim())
      .forEach((line, index) => {
        const colon = line.indexOf(":");
        const key =
          colon > 0 ? line.slice(0, colon).trim() : "Detail " + (index + 1);
        specifications[key] =
          colon > 0 ? line.slice(colon + 1).trim() : line.trim();
      });
    return specifications;
  }
  getElement("#sell-form").onsubmit = (event) => {
    event.preventDefault();
    if (imageBusy) return;
    if (!uploadImages.length) {
      toast("Add at least one product image.");
      getElement("#product-images").focus();
      return;
    }
    const fields = new FormData(event.target),
      old = editingId ? byId(editingId) : null;
    const product = {
      id: editingId || Date.now(),
      name: fields.get("name").trim(),
      brand: fields.get("brand").trim(),
      category: fields.get("category"),
      condition: fields.get("condition"),
      grade: fields.get("condition") === "Used" ? fields.get("grade") : "",
      description: fields.get("description").trim(),
      specs: specificationsFromText(fields.get("specifications")),
      price: Number(fields.get("price")),
      originalPrice: Number(fields.get("price")),
      stock: Number(fields.get("stock")),
      seller: fields.get("seller").trim(),
      images: [...uploadImages],
      lowestAsk: Number(fields.get("price")),
      highestBid: old?.highestBid || 0,
      history: old?.history || [],
      dateAdded: old?.dateAdded || new Date().toISOString(),
      popularity: old?.popularity || 0,
      local: true,
      ownerId: NexAuth.current().id,
    };
    if (
      !product.name ||
      !product.brand ||
      !product.seller ||
      !product.description ||
      !Object.keys(product.specs).length ||
      !Number.isFinite(product.price) ||
      product.price <= 0 ||
      !Number.isInteger(product.stock) ||
      product.stock < 0
    ) {
      toast("Complete all required fields with valid values.");
      return;
    }
    showModal(
      "Review your listing",
      `${imageTag(product, 'style="height:160px;width:100%;object-fit:contain"')}<h3 class="mt-3">${esc(product.name)}</h3><p>${esc(product.condition)} ${esc(product.grade)} · ${esc(product.category)}</p><p><strong>${peso(product.price)}</strong> · ${product.stock} available</p><p class="muted">${esc(product.description)}</p><table class="spec-table"><tbody>${Object.entries(
        product.specs,
      )
        .map(
          ([key, value]) =>
            `<tr><td>${esc(key)}</td><td>${esc(value)}</td></tr>`,
        )
        .join(
          "",
        )}</tbody></table><p class="note mt-3">Seller: ${esc(product.seller)}. This listing will be saved locally in your browser.</p>`,
      `<button class="btn btn-outline" data-bs-dismiss="modal">Keep editing</button><button class="btn btn-mint" id="publish-listing">${editingId ? "Save changes" : "Publish listing"}</button>`,
    );
    getElement("#publish-listing").onclick = () => {
      let listings = read("listings");
      listings = editingId
        ? listings.map((item) =>
            String(item.id) === String(editingId) ? product : item,
          )
        : [...listings, product];
      if (write("listings", listings)) {
        hideModal();
        resetListing();
        renderListings();
        toast("Listing saved and added to the catalog.");
      }
    };
  };
  getElement("#my-listings").onclick = (event) => {
    const edit = event.target.closest("[data-edit]"),
      remove = event.target.closest("[data-delete]");
    if (edit) {
      const product = byId(edit.dataset.edit);
      if (!product || product.ownerId !== NexAuth.current().id) return;
      editingId = product.id;
      [
        "name",
        "brand",
        "category",
        "condition",
        "grade",
        "description",
        "price",
        "stock",
        "seller",
      ].forEach(
        (key) => (getElement("#sell-form").elements[key].value = product[key]),
      );
      getElement("#specifications").value = Object.entries(product.specs)
        .map(([key, value]) => key + ": " + value)
        .join("\n");
      uploadImages = [...product.images];
      updateImagePreviews();
      getElement("#product-images").value = "";
      getElement("#grade-wrap").classList.toggle(
        "hide",
        product.condition !== "Used",
      );
      getElement("#preview-name").textContent = product.name;
      getElement("#preview-price").textContent = peso(product.price);
      getElement("#form-heading").textContent = "Edit your listing";
      getElement("#upload-status").textContent =
        "Existing photos retained. Select files to replace them.";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (remove) {
      const id = remove.dataset.delete;
      if (byId(id)?.ownerId !== NexAuth.current().id) return;
      showModal(
        "Delete listing?",
        `<p>Remove ${esc(byId(id).name)} from this browser’s marketplace? This also removes it from your cart and favorites.</p>`,
        `<button class="btn btn-outline" data-bs-dismiss="modal">Keep listing</button><button class="btn btn-mint" id="confirm-delete">Delete listing</button>`,
      );
      getElement("#confirm-delete").onclick = () => {
        if (
          write(
            "listings",
            read("listings").filter((product) => String(product.id) !== id),
          )
        ) {
          write(
            "cart",
            read("cart").filter((item) => String(item.id) !== id),
          );
          write(
            "favorites",
            read("favorites").filter((item) => String(item) !== id),
          );
          updateCartCount();
          if (String(editingId) === id) resetListing();
          hideModal();
          renderListings();
          toast("Listing deleted.");
        }
      };
    }
  };
  renderListings();

  getElement("#seller-name").value = NexAuth.current().name;
}
