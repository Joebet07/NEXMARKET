// EXTENSION: account records and sessions. Password hashing lives in password-helper.js.
/* LOCAL DEMO ONLY. Browser data can be edited by its owner; this is not a security boundary.
   Passwords are never stored as plain text. Do not use a real/reused password here. */
const NexAuth = (() => {
  const get = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const users = () => get("nex-users", []);
  function saveUsers(records) {
    localStorage.setItem("nex-users", JSON.stringify(records));
  }
  function current() {
    try {
      const id = sessionStorage.getItem("nex-session");
      return users().find((user) => user.id === id) || null;
    } catch {
      return null;
    }
  }
  function scope(key) {
    if (!["cart", "favorites", "orders", "offers", "messages"].includes(key))
      return "nex-" + key;
    const user = current();
    return user ? "nex-user-" + user.id + "-" + key : "nex-" + key;
  }
  function validatePassword(password) {
    if (password.length < 8 || password.length > 128)
      throw Error("Use a demo password between 8 and 128 characters.");
  }
  async function register(name, email, password) {
    name = name.trim();
    email = email.trim().toLowerCase();
    if (!name || name.length > 60)
      throw Error("Enter a display name of 1–60 characters.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      throw Error(
        "Enter a valid email format. Use a sample address for this demo.",
      );
    validatePassword(password);
    if (users().some((user) => user.email === email))
      throw Error("An account with that email already exists in this browser.");
    const salt = passwordBytesToHex(crypto.getRandomValues(new Uint8Array(16)));
    const hash = await passwordHash(password, salt);
    // Read again after asynchronous hashing to avoid overwriting another tab's changes.
    const records = users();
    if (records.some((user) => user.email === email))
      throw Error("That email has just been registered. Please log in.");
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      salt,
      hash,
      photo: "",
      bio: "",
      createdAt: new Date().toISOString(),
    };
    saveUsers([...records, user]);
    return user;
  }
  async function login(email, password) {
    const user = users().find(
      (user) => user.email === email.trim().toLowerCase(),
    );
    if (!user || (await passwordHash(password, user.salt)) !== user.hash)
      throw Error("Email or demo password is incorrect.");
    return user;
  }
  function start(user, bringGuest = false) {
    if (bringGuest) {
      const prefix = "nex-user-" + user.id + "-";
      const cart = get(prefix + "cart", []),
        guest = get("nex-cart", []);
      for (const item of guest) {
        const p = byId(item.id);
        if (!p || !p.stock) continue;
        const existing = cart.find((x) => String(x.id) === String(item.id));
        if (existing) existing.qty = Math.min(p.stock, existing.qty + item.qty);
        else cart.push({ id: p.id, qty: Math.min(item.qty, p.stock) });
      }
      const favorites = [
        ...new Set(
          [...get(prefix + "favorites", []), ...get("nex-favorites", [])].map(
            String,
          ),
        ),
      ];
      localStorage.setItem(prefix + "cart", JSON.stringify(cart));
      localStorage.setItem(prefix + "favorites", JSON.stringify(favorites));
      localStorage.removeItem("nex-cart");
      localStorage.removeItem("nex-favorites");
    }
    sessionStorage.setItem("nex-session", user.id);
  }
  function logout() {
    sessionStorage.removeItem("nex-session");
  }
  function updateProfile(name, bio, photo) {
    const user = current();
    if (!user) throw Error("Please log in again.");
    name = name.trim();
    if (!name || name.length > 60)
      throw Error("Enter a display name of 1–60 characters.");
    const next = { ...user, name, bio: bio.trim().slice(0, 300), photo };
    saveUsers(users().map((record) => (record.id === user.id ? next : record)));
    return next;
  }
  async function changePassword(oldPassword, newPassword) {
    const user = current();
    if (!user) throw Error("Please log in again.");
    if ((await passwordHash(oldPassword, user.salt)) !== user.hash)
      throw Error("Current demo password is incorrect.");
    validatePassword(newPassword);
    const salt = passwordBytesToHex(crypto.getRandomValues(new Uint8Array(16))),
      hash = await passwordHash(newPassword, salt);
    saveUsers(
      users().map((record) =>
        record.id === user.id ? { ...record, salt, hash } : record,
      ),
    );
  }
  function nextPage() {
    const next = new URLSearchParams(location.search).get("next");
    return ["account.html", "sell.html", "cart.html"].includes(next)
      ? next
      : "account.html";
  }
  return {
    current,
    scope,
    register,
    login,
    start,
    logout,
    updateProfile,
    changePassword,
    nextPage,
  };
})();
