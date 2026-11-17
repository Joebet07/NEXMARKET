// EXTENSION: display the current account and its saved activity. Do not confuse local accounts with server authentication.
function avatar(user) {
  return user.photo
    ? `<img class="account-avatar" src="${esc(user.photo)}" alt="Profile photo of ${esc(user.name)}">`
    : `<div class="account-avatar initials" aria-label="Profile initials">${esc(user.name.slice(0, 2).toUpperCase())}</div>`;
}
function renderAccount() {
  const user = NexAuth.current();
  if (!user) {
    getElement("#main").innerHTML =
      '<div class="wrap"><section class="empty my-5"><h1>Your account, your next.</h1><p>Log in to view your profile, listings and demo orders.</p><a class="btn btn-mint" href="login.html">Log in</a> <a class="btn btn-outline" href="signup.html">Create account</a></section></div>';
    return;
  }
  const listings = read("listings").filter((p) => p.ownerId === user.id),
    orders = read("orders"),
    favorites = products().filter((p) =>
      read("favorites").map(String).includes(String(p.id)),
    ),
    offers = read("offers");
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <div class="page-head account-heading">
      <div class="account-identity">
        ${avatar(user)}
        <div>
          <div class="eyebrow">YOUR NEXTMARKET</div>
          <h1>Hello, ${esc(user.name)}.</h1>
          <p class="note mb-0">
            ${esc(user.email)} · Joined
            ${new Date(user.createdAt).toLocaleDateString("en-PH")}
          </p>
        </div>
      </div>
      <button id="logout" class="btn btn-outline">
        Log out ${icon("box-arrow-right")}
      </button>
    </div>
    <p class="note">
      Local demo account. All profiles and activity are stored in this browser
      and can be inspected or modified by its owner.
    </p>
    <div class="account-stats">
      ${[
        ["Listings", listings.length],
        ["Favorites", favorites.length],
        ["Demo orders", orders.length],
        ["Offers", offers.length],
      ]
        .map(
          ([label, count]) =>
            `<div class="panel"><small>${label}</small><h2 class="mt-2 mb-0">${count}</h2></div>`,
        )
        .join("")}
    </div>
    <div class="info-grid section">
      <section class="panel">
        <h2>Your profile</h2>
        <form id="profile-form" class="mt-3">
          <label class="form-label" for="profile-name">Display name</label
          ><input
            class="form-control mb-3"
            id="profile-name"
            maxlength="60"
            value="${esc(user.name)}"
            required
          /><label class="form-label" for="profile-bio">About you</label
          ><textarea
            id="profile-bio"
            class="form-control mb-3"
            maxlength="300"
            rows="3"
          >
${esc(user.bio)}</textarea
          ><label class="form-label" for="profile-photo">Profile photo</label
          ><input
            class="form-control"
            id="profile-photo"
            type="file"
            accept="image/png,image/jpeg,image/webp"
          />
          <p class="note mt-2">
            JPEG, PNG or WebP, up to 5 MB. Resized to 240 pixels.
          </p>
          <div id="avatar-preview" class="mb-3">${avatar(user)}</div>
          <label class="note d-block mb-3"
            ><input type="checkbox" id="remove-photo" /> Remove current
            photo</label
          >
          <p id="profile-error" class="negative" role="alert"></p>
          <button id="profile-save" class="btn btn-mint">Save profile</button>
        </form>
      </section>
      <section class="panel">
        <h2>Change demo password</h2>
        <p class="note">
          Use a unique demo password. Passwords are stored as salted hashes, but
          this browser-only project is not production authentication.
        </p>
        <form id="password-form">
          <label for="old-password" class="form-label"
            >Current demo password</label
          ><input
            class="form-control mb-3"
            id="old-password"
            type="password"
            autocomplete="current-password"
            required
          /><label for="new-password" class="form-label"
            >New demo password</label
          ><input
            class="form-control mb-3"
            id="new-password"
            type="password"
            autocomplete="new-password"
            minlength="8"
            maxlength="128"
            required
          /><label for="confirm-password" class="form-label"
            >Confirm new password</label
          ><input
            class="form-control mb-3"
            id="confirm-password"
            type="password"
            autocomplete="new-password"
            minlength="8"
            maxlength="128"
            required
          />
          <p id="password-error" class="negative" role="alert"></p>
          <button class="btn btn-outline" id="password-save">
            Update password
          </button>
        </form>
        <hr />
        <p class="note">
          You can browse without logging in. Selling and demo checkout require
          an account. Guest activity stays separate unless you choose to import
          the bag and favorites at login.
        </p>
      </section>
    </div>
    <section class="section">
      <div class="section-head">
        <h2>My listings</h2>
        <a href="sell.html">Manage listings ${icon("arrow-up-right")}</a>
      </div>
      <div class="product-grid">
        ${listings.length ? listings.map(card).join("") : '<div class="empty">You have no listings yet. <a href="sell.html" class="positive">Create your first listing.</a></div>'}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2>My favorites</h2>
        <a href="shop.html?favorites=1">View saved finds</a>
      </div>
      <div class="product-grid" id="account-favorites">
        ${favorites.length ? favorites.map(card).join("") : '<div class="empty">Tap a product’s heart to save it to this account.</div>'}
      </div>
    </section>
    <section class="section panel">
      <h2>Demo order history</h2>
      ${
        orders.length
          ? orders
              .slice()
              .reverse()
              .map(
                (order) =>
                  `<details class="faq"><summary>${esc(order.id)} · ${peso(order.total)}</summary><p class="note">${new Date(order.date).toLocaleString("en-PH")} · Simulation complete · No payment or shipping</p><p class="note">Payment: ${esc(order.payment?.label || "Legacy demo checkout")}${order.payment?.bank ? " · " + esc(order.payment.bank) : ""}<br>${esc(order.payment?.status || "No money collected")}</p>${order.items.map((item) => `<div class="total-line"><span>${esc(item.name || byId(item.id)?.name || "Removed product")} × ${item.qty}</span><span>${item.price !== undefined ? peso(item.price * item.qty) : "Legacy demo order"}</span></div>`).join("")}<p class="note">Total includes sample delivery.</p></details>`,
              )
              .join("")
          : '<p class="muted mt-3">Completed demo checkouts will appear here.</p>'
      }
    </section>
    <section class="section panel">
      <h2>My demo offers</h2>
      ${
        offers.length
          ? offers
              .slice()
              .reverse()
              .map(
                (offer) =>
                  `<div class="total-line"><span>${esc(byId(offer.productId)?.name || "Removed listing")}<small class="d-block">Saved locally · ${new Date(offer.date).toLocaleDateString("en-PH")}</small></span><strong>${peso(offer.amount)}</strong></div>`,
              )
              .join("")
          : '<p class="muted mt-3">Offers you submit from product pages appear here.</p>'
      }
      <p class="note">Offers are not sent to real sellers.</p>
    </section>
  </div>`;
  getElement("#logout").onclick = () => {
    NexAuth.logout();
    location.href = "login.html";
  };
  let photo = user.photo;
  getElement("#profile-photo").onchange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const save = getElement("#profile-save");
    save.disabled = true;
    getElement("#profile-error").textContent = "";
    try {
      if (
        !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
        file.size > 5 * 1024 * 1024
      )
        throw Error("Choose a JPEG, PNG or WebP image smaller than 5 MB.");
      photo = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(Error("Unable to read that image."));
        reader.onload = () => {
          const image = new Image();
          image.onerror = () => reject(Error("Unable to load that image."));
          image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = 240;
            const ctx = canvas.getContext("2d"),
              side = Math.min(image.width, image.height);
            ctx.drawImage(
              image,
              (image.width - side) / 2,
              (image.height - side) / 2,
              side,
              side,
              0,
              0,
              240,
              240,
            );
            resolve(canvas.toDataURL("image/jpeg", 0.8));
          };
          image.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
      getElement("#remove-photo").checked = false;
      getElement("#avatar-preview").innerHTML = avatar({ ...user, photo });
    } catch (error) {
      getElement("#profile-error").textContent = error.message;
    } finally {
      save.disabled = false;
    }
  };
  getElement("#profile-form").onsubmit = (event) => {
    event.preventDefault();
    try {
      NexAuth.updateProfile(
        getElement("#profile-name").value,
        getElement("#profile-bio").value,
        getElement("#remove-photo").checked ? "" : photo,
      );
      renderAccount();
      toast("Profile updated.");
    } catch (error) {
      getElement("#profile-error").textContent = error.message;
    }
  };
  getElement("#password-form").onsubmit = async (event) => {
    event.preventDefault();
    const button = getElement("#password-save");
    button.disabled = true;
    getElement("#password-error").textContent = "";
    try {
      if (
        getElement("#new-password").value !==
        getElement("#confirm-password").value
      )
        throw Error("New passwords do not match.");
      await NexAuth.changePassword(
        getElement("#old-password").value,
        getElement("#new-password").value,
      );
      event.target.reset();
      toast("Demo password updated.");
    } catch (error) {
      getElement("#password-error").textContent = error.message;
    } finally {
      button.disabled = false;
    }
  };
}
renderAccount();
