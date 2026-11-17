const signingUp = currentPage === "signup.html";
if (NexAuth.current()) {
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <section class="empty my-5">
      <h1>You’re already logged in.</h1>
      <p>Welcome back, ${esc(NexAuth.current().name)}.</p>
      <a class="btn btn-mint" href="account.html">Open my account</a>
      <button id="switch-account" class="btn btn-outline">Log out</button>
    </section>
  </div>`;
  getElement("#switch-account").onclick = () => {
    NexAuth.logout();
    location.reload();
  };
} else {
  const next = NexAuth.nextPage();
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <div class="auth-layout section">
      <section class="auth-intro">
        <div class="eyebrow">YOUR NEXT STARTS HERE</div>
        <h1>${signingUp ? "Make it yours." : "Welcome back."}</h1>
        <p class="muted">
          Keep your favorite finds, manage your listings, and revisit your demo
          orders in one place.
        </p>
        <div class="steps">
          <div class="step">
            <h3>Save your finds</h3>
            <p>Your own collection of next upgrades.</p>
          </div>
          <div class="step">
            <h3>${icon("bag")}  Track demo orders</h3>
            <p>Every simulated checkout, together.</p>
          </div>
        </div>
      </section>
      <section class="panel">
        <h2>${signingUp ? "Create a demo account" : "Log in to NEXTMARKET"}</h2>
        <p class="note">
          Browser-only school project. Use a sample email and a unique demo
          password—not a real or reused password. No email is sent.
        </p>
        <form id="auth-form" class="mt-4">
          ${signingUp ? '<label class="form-label" for="auth-name">Display name</label><input id="auth-name" class="form-control mb-3" autocomplete="nickname" maxlength="60" required>' : ""}<label
            class="form-label"
            for="auth-email"
            >Email</label
          ><input
            id="auth-email"
            class="form-control mb-3"
            type="email"
            autocomplete="username"
            maxlength="150"
            placeholder="student@example.com"
            required
          /><label class="form-label" for="auth-password">Demo password</label
          ><input
            id="auth-password"
            class="form-control mb-3"
            type="password"
            autocomplete="${signingUp ? "new-password" : "current-password"}"
            minlength="8"
            maxlength="128"
            required
          />${signingUp ? '<label class="form-label" for="auth-confirm">Confirm demo password</label><input id="auth-confirm" class="form-control mb-3" type="password" autocomplete="new-password" minlength="8" maxlength="128" required>' : ""}<label
            class="note d-block mb-3"
            ><input type="checkbox" id="show-password" /> Show password</label
          ><label class="note d-block mb-3"
            ><input type="checkbox" id="bring-guest" checked /> Bring my guest
            shopping bag and favorites into this account.</label
          >
          <p id="auth-error" role="alert" class="negative"></p>
          <button class="btn btn-mint w-100" id="auth-submit" type="submit">
            ${signingUp ? "Create account" : "Log in"} ${icon("arrow-right")}
          </button>
        </form>
        <p class="note mt-3">
          ${signingUp ? "Already have an account?" : "New to NEXTMARKET?"}
          <a
            class="positive"
            href="${signingUp ? "login" : "signup"}.html?next=${next}"
            >${signingUp ? "Log in" : "Create an account"}</a
          >
        </p>
        <details class="faq">
          <summary class="note">How do demo accounts work?</summary>
          <p class="note">
            Accounts exist only in this browser. They are not secure real-world
            authentication, cannot sync across devices, and have no email
            recovery. Closing the tab ends this demo session. If you forget a
            demo password, create another sample account.
          </p>
        </details>
      </section>
    </div>
  </div>`;
  getElement("#show-password").onchange = (event) => {
    getElement("#auth-password").type = event.target.checked
      ? "text"
      : "password";
    if (getElement("#auth-confirm"))
      getElement("#auth-confirm").type = getElement("#auth-password").type;
  };
  getElement("#auth-form").onsubmit = async (event) => {
    event.preventDefault();
    getElement("#auth-error").textContent = "";
    const button = getElement("#auth-submit");
    button.disabled = true;
    button.textContent = "Please wait…";
    try {
      const email = getElement("#auth-email").value,
        password = getElement("#auth-password").value;
      if (signingUp && password !== getElement("#auth-confirm").value)
        throw Error("The passwords do not match.");
      const user = signingUp
        ? await NexAuth.register(
            getElement("#auth-name").value,
            email,
            password,
          )
        : await NexAuth.login(email, password);
      NexAuth.start(user, getElement("#bring-guest").checked);
      location.href = next;
    } catch (error) {
      getElement("#auth-error").textContent =
        error.name === "QuotaExceededError"
          ? "Browser storage is full. Remove old local data and try again."
          : error.message;
      button.disabled = false;
      button.textContent = signingUp ? "Create account" : "Log in";
    }
  };
}
