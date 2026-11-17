// STUDY: an array defines the five choices. paymentSelection validates the chosen values.
/* Demonstration choices only. No gateway calls, bank details, PINs or OTPs. */
const PAYMENT_METHODS = [
  {
    id: "gcash",
    label: "GCash",
    icon: "phone",
    description:
      "Try a simulated GCash wallet checkout. No wallet is connected and no money is transferred.",
  },
  {
    id: "maya",
    label: "Maya",
    icon: "wallet2",
    description:
      "Try a simulated Maya wallet checkout. No wallet is connected and no money is transferred.",
  },
  {
    id: "qr",
    label: "QR payment",
    icon: "qr-code",
    description:
      "This demo QR contains a plain-text project message only. It is not a payment request and cannot transfer money.",
  },
  {
    id: "bank",
    label: "Online banking",
    icon: "bank",
    description:
      "Choose an example bank for the demo receipt. No bank account is connected and no transfer is initiated.",
  },
  {
    id: "cod",
    label: "Cash on delivery (COD)",
    icon: "cash-stack",
    description:
      "Simulate paying cash upon delivery. This project creates no delivery, charge, or amount actually due.",
  },
];
const DEMO_BANKS = ["BDO", "BPI", "Metrobank", "UnionBank", "Other bank"];
function paymentPicker() {
  return `<fieldset class="payment-fieldset"><legend>Payment method</legend><p class="note">Choose a demo option. No real payment will be collected. Do not enter wallet, bank, PIN or OTP details.</p><div class="payment-options">${PAYMENT_METHODS.map((method) => `<label class="payment-choice"><input type="radio" name="payment-method" value="${method.id}"><span class="payment-logo ${method.id}">${icon(method.icon)}</span><span>${method.label}<small class="d-block">Demo only</small></span></label>`).join("")}</div><div id="payment-details" class="payment-details hide" aria-live="polite"></div><p id="payment-error" class="negative mt-2" role="alert"></p></fieldset>`;
}
function paymentSelection(id, bank = "") {
  const method = PAYMENT_METHODS.find((item) => item.id === id);
  if (!method) throw Error("Choose a payment method to continue.");
  if (id === "bank" && !DEMO_BANKS.includes(bank))
    throw Error("Choose an example bank.");
  return {
    id: method.id,
    label: method.label,
    bank: id === "bank" ? bank : "",
    status:
      id === "cod"
        ? "Demo COD selected — no amount due"
        : "Payment simulated — no money transferred",
  };
}
function mountPayments() {
  getAllElements('input[name="payment-method"]').forEach(
    (input) =>
      (input.onchange = () => {
        const method = PAYMENT_METHODS.find((item) => item.id === input.value);
        getAllElements(".payment-choice").forEach((label) =>
          label.classList.toggle(
            "selected",
            getElement("input", label).checked,
          ),
        );
        getElement("#payment-error").textContent = "";
        getElement("#payment-details").classList.remove("hide");
        getElement("#payment-details").innerHTML = /* HTML */ `<h3>
            ${method.label}
          </h3>
          <p class="note mb-2">${method.description}</p>
          ${method.id === "bank" ? `<label for="demo-bank" class="form-label">Example bank (simulation only)</label><select id="demo-bank" class="form-select"><option value="">Select an example bank</option>${DEMO_BANKS.map((bank) => `<option>${bank}</option>`).join("")}</select>` : ""}${method.id === "qr" ? '<img class="demo-qr" src="assets/images/demo-payment-qr.png" alt="Demo QR code containing a plain-text NEXTMARKET message, not payment instructions"><p class="note mt-2">Scan to read the demo message. No merchant account or payment destination is encoded.</p>' : ""}`;
        getElement("#complete-order").textContent =
          method.id === "cod"
            ? "Place demo COD order"
            : "Simulate payment & place order";
      }),
  );
}
