/* Contact page: form submission and FAQ controls. Edit the other information pages in their HTML files. */
if (currentPage === "contact.html") {
  const faqs = [
    [
      "Can I actually buy a product?",
      "No. This is a frontend demonstration. Checkout shows calculations and saves a demo receipt without processing any payment.",
    ],
    [
      "Where are my listings stored?",
      "Listings, photos, offers, favorites and cart items are stored in this browser’s LocalStorage. They will not appear on another device. Clearing browser data removes them.",
    ],
    [
      "Are the market prices live?",
      "No. Charts use fixed simulated transactions for a snapshot on 13 November 2026. Statistics are calculated from the selected timeframe.",
    ],
    [
      "What do the condition grades mean?",
      "Like New means minimal signs of use. Excellent means light wear. Good means visible wear. Fair means heavier wear. These are demo classifications, not verified inspections.",
    ],
    [
      "Can I edit a listing?",
      "Yes. Open the Sell page, scroll to My listings, and use Edit or Delete. Your changes immediately affect the local catalog.",
    ],
  ];
  getElement("#main").innerHTML = /* HTML */ `<div class="wrap">
    <div class="page-head">
      <div class="eyebrow">LET’S TALK TECH</div>
      <h1>A little help for your next.</h1>
      <p class="muted">Questions about the marketplace? Start here.</p>
    </div>
    <div class="contact-grid">
      <section class="panel">
        <h2>Leave a demo message</h2>
        <p class="note">
          This form validates and saves locally. Messages are not sent to a real
          business.
        </p>
        <form id="contact-form" class="form-grid mt-4">
          <div>
            <label class="form-label" for="contact-name">Name</label
            ><input
              class="form-control"
              id="contact-name"
              name="name"
              required
              maxlength="80"
            />
          </div>
          <div>
            <label class="form-label" for="contact-email">Email</label
            ><input
              class="form-control"
              id="contact-email"
              name="email"
              type="email"
              required
              maxlength="150"
            />
          </div>
          <div class="full">
            <label for="contact-topic" class="form-label">Topic</label
            ><select name="topic" id="contact-topic" class="form-select">
              <option>Buying a product</option>
              <option>Selling a product</option>
              <option>Shipping & returns</option>
              <option>Project feedback</option>
            </select>
          </div>
          <div class="full">
            <label for="contact-message" class="form-label">Message</label
            ><textarea
              id="contact-message"
              name="message"
              class="form-control"
              rows="5"
              required
              maxlength="2000"
            ></textarea>
          </div>
          <div class="full">
            <button class="btn btn-mint" type="submit">
              Save demo message ${icon("arrow-up-right")}
            </button>
          </div>
        </form>
      </section>
      <aside class="panel">
        <h2>Get in touch</h2>
        <p class="note">
          Example contact details only. They do not belong to an operating
          NEXTMARKET business.
        </p>
        <p>
          ${icon("envelope")} &nbsp;
          <a href="mailto:hello@NEXTMARKET.example">hello@NEXTMARKET.example</a>
        </p>
        <p>
          ${icon("telephone")} &nbsp;
          <a href="tel:+630000000000">+63 000 000 0000 (placeholder)</a>
        </p>
        <p>${icon("geo-alt")} &nbsp; Manila, Philippines (demo)</p>
        <h3 class="mt-4">Around the web</h3>
        <div class="d-flex gap-3 flex-wrap">
          <button
            class="btn btn-outline social-demo"
            aria-label="Messenger demo information"
          >
            ${icon("messenger")} Messenger</button
          ><button
            class="btn btn-outline social-demo"
            aria-label="Instagram demo information"
          >
            ${icon("instagram")}</button
          ><button
            class="btn btn-outline social-demo"
            aria-label="Facebook demo information"
          >
            ${icon("facebook")}
          </button>
        </div>
        <p class="note mt-3">
          Official social accounts have not been supplied. These controls
          explain the demo rather than linking to unrelated accounts.
        </p>
      </aside>
    </div>
    <section class="section policy">
      <div class="eyebrow">A FEW THINGS WORTH KNOWING</div>
      <h2 class="mt-3">Frequently asked questions</h2>
      ${faqs.map(([question, answer]) => `<details class="faq"><summary>${question}</summary><p>${answer}</p></details>`).join("")}
    </section>
  </div>`;
  getAllElements(".social-demo").forEach(
    (button) =>
      (button.onclick = () =>
        showModal(
          "Social accounts are not connected",
          "<p>NEXTMARKET is an academic project. Add real business social links when verified account details are available.</p>",
        )),
  );
  getElement("#contact-form").onsubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (!data.name.trim() || !data.message.trim()) {
      toast("Please enter your name and a message.");
      return;
    }
    const messages = read("messages");
    messages.push({ ...data, date: new Date().toISOString() });
    if (write("messages", messages)) {
      event.target.reset();
      toast("Demo message saved locally. Nothing was sent.");
    }
  };
}
