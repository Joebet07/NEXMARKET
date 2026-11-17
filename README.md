# NEXTMARKET — First-Year Learning Edition

A complete, buildless academic frontend project using HTML5, CSS3, Bootstrap 5.3, Bootstrap Icons, vanilla JavaScript and Chart.js 4. Includes 41 sample listings, new and used variants, local product photographs, and a charcoal/mint visual design.

Start with **STUDENT_GUIDE.md** for the reading order, key concepts, worked examples and practice exercises. The main cart, filter and chart calculations now use explicit loops and conditions. Advanced helpers remain separated and labeled.

## Open in VS Code

1. Extract the ZIP file.
2. In VS Code, choose **File → Open Folder** and select the extracted **NEXTMARKET** folder.
3. Install **Live Server** by Ritwick Dey if you do not already have it.
4. Right-click **index.html** and choose **Open with Live Server**.
5. Keep an internet connection for the CDN libraries and Google Fonts.

No Node.js installation, npm command, database, API key or backend is required. Use Live Server instead of opening HTML through `file://`, so storage and clipboard behavior are consistent. The HTML, CSS, JavaScript and all product images are included in this folder.

## Pages

| File          | Purpose                                                                       |
| ------------- | ----------------------------------------------------------------------------- |
| index.html    | Hero, featured products, categories, promotions, brands and trending carousel |
| shop.html     | Search, multiple filters, price sliders, sorting and saved favorites          |
| product.html  | Dynamic details, gallery, offers, cart controls and price history             |
| sell.html     | Upload, preview, review, add, edit and delete local listings                  |
| market.html   | Product-selectable chart and demo market rankings                             |
| cart.html     | Quantities, subtotal, delivery fee, total and simulated checkout              |
| about.html    | Project background, mission, vision and workflow                              |
| shipping.html | Clearly labeled sample shipping information                                   |
| returns.html  | Clearly labeled sample return policy                                          |
| contact.html  | Validated local contact form and FAQs                                         |

Open a product with a URL such as `product.html?id=101`. Missing product IDs show a useful error state.

## Folder structure

- `css/style.css` — colors, layout, responsive breakpoints and theme styles.
- `js/products.js` — sample inventory and fixed simulated transaction records.
- `js/password-helper.js` — isolated advanced password hashing; keep unchanged while learning.
- `js/main.js` — navigation, footer, formatting, storage, product cards and shared controls.
- `js/home.js` — homepage sections and carousel.
- `js/catalog.js` — search, multi-filter logic and sorting.
- `js/product-details.js` — product gallery, offers and detail layout.
- `js/charts.js` — reusable Chart.js rendering and derived statistics.
- `js/market.js` — trends page and product selection.
- `js/sell.js` — image resizing, listing review, add/edit/delete workflow.
- `js/cart.js` — quantity validation and demonstration checkout.
- `js/pages.js` — contact form; About, Shipping and Returns content is now written directly in HTML.
- `assets/images/` — downloaded product photographs and image fallback.
- `assets/icons/` — NEXTMARKET favicon.
- `assets/banners/` — notes about the responsive HTML/CSS promotional banners.

## Features and implementation

- Search matches names, brands, categories and descriptions, without case sensitivity.
- Filter groups combine with AND; multiple checkboxes within a group combine with OR.
- Category, condition, grade, brand, availability and minimum/maximum price work simultaneously.
- Six sort modes, a clear-filters control, results count and empty-result states.
- Favorites, theme, cart, offers, listings and demo messages persist in LocalStorage.
- Cart quantities cannot exceed available stock. The sample delivery fee is ₱150 per order.
- Seller uploads accept up to three JPEG, PNG or WebP images, each at most 10 MB. Images are resized to a maximum of 700 pixels and compressed before storage. Storage-limit errors show feedback.
- Seller review confirms the listing details before saving. Editing retains existing photos unless replacements are chosen. Quantity zero marks a listing sold out.
- Product gallery, image enlargement, positive-number offer validation and a copy-link fallback.
- Charts include 24H, 7D and 30D ranges, exact timestamp/price tooltips and accessible text summaries. Latest, average, minimum, maximum and changes come from the selected records.
- Bootstrap mobile offcanvas menus and filters, keyboard focus outlines, alt text and form labels.
- A one-column catalog at very narrow widths; two columns on mobile; larger grids on desktop.

## Important demo limitations

NEXTMARKET is fictional and does not operate a real business. This project has local demo accounts only; it does not provide secure server authentication, verify sellers, process payments, send messages, create shipments or issue refunds. Social media buttons explain that real accounts have not been supplied; example phone and email links are clearly labeled.

Everything saved by a visitor stays in that browser and origin. Moving to a different Live Server port, using another browser/device, or clearing site data creates a separate or empty local state. User listings are never synchronized to other people. Browser storage has a limited quota.

All prices, discounts, bids, popularity values and sales are simulated; they are not current market quotations. Chart ranges use a **fixed snapshot of 13 November 2026 at 19:00 Philippine time** so the sample history remains visible whenever the project is opened. The 30D view includes the records available within that window; the sample only has 13 days of records. Brand-new and used variants have separate histories. Newly created listings have no transaction history.

Submitted offers are saved locally and acknowledged, but do not negotiate with a seller or change the fixed sample bid book. Demo checkout stores a receipt and clears the cart without decreasing stock or charging money. Technical specifications describe example listing configurations; verify exact real-world models before an actual purchase.

## Customize

- Change colors using the CSS variables at the start of `css/style.css`.
- Add sample products in `js/products.js`, with unique IDs and valid local image paths.
- Edit About, Shipping and Returns directly in their HTML files. Add real business contact information in `js/pages.js` only if you have permission to use it.
- Edit shared navigation/footer in `js/main.js`.
- Edit the fixed snapshot and history data together if changing the demo date.

## Optional deployment later

You requested a VS Code folder only; nothing needs to be deployed to run this project.

### Netlify

Drag the extracted `NEXTMARKET` folder into Netlify's manual deploy area. For a Git-connected deployment, leave the build command blank and set the publish directory to the repository root (`.`).

### GitHub Pages

Upload the contents of `NEXTMARKET` to the root of a repository. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then Save. Use the live URL GitHub provides after deployment completes.

## Assets and credits

- Product photos/descriptions in the main sample inventory: DummyJSON public product catalog, https://dummyjson.com/ .
- Additional representative category photographs: Unsplash, https://unsplash.com/ . These listings explicitly describe their photos as illustrative and do not imply an exact model match.
- Bootstrap: https://getbootstrap.com/ ; Bootstrap Icons: https://icons.getbootstrap.com/ .
- Chart.js: https://www.chartjs.org/ ; Inter: Google Fonts.
- Brand names identify sample products; no affiliation or endorsement is implied.

## Quick manual check

1. Search for `iPhone`, choose Used, and confirm the remaining results.
2. Change price ranges and sorting, then clear filters.
3. Save a favorite, reload, and view the Favorites page.
4. Open a product, change gallery images, select each chart timeframe, and submit a positive demo offer.
5. Add an item to the bag, change quantity, review and complete demo checkout.
6. On Sell, fill all fields, upload a photo, review and publish. Find the listing in Shop, then edit and delete it from My listings.
7. Try dark/light themes and narrow your browser window to inspect the mobile navigation and filters.

## Demo login and accounts

Open `signup.html` or use the person icon in the header. Create an account with a sample email and an 8–128 character **unique demo password**. Then log in through `login.html`. Run with Live Server on localhost (Web Crypto requires a secure context).

`account.html` includes display-name/bio editing, profile-photo upload/removal, password changes, your listings, favorites, demo order history and offers. Logout clears the current tab session. Signup/login validate duplicates and passwords; no email verification or recovery is sent.

This is **not production authentication**. Passwords use a random salt and PBKDF2-SHA-256 (100,000 iterations), but all records and session state are controlled by the browser owner. Do not enter actual private information or reuse real passwords. Clearing site data removes accounts; there is no recovery.

Cart, favorites, orders, offers and messages are scoped to the logged-in account. Login can import guest cart/favorites when the visible checkbox is selected; older guest orders and offers remain guest data. Selling and checkout require login. Listings remain visible throughout the local catalog, while editing controls are shown only to the account that created them. Legacy listings from the previous project version remain visible but are unowned and cannot be edited through a new account. These are UI rules, not secure access controls.

New files: `login.html`, `signup.html`, `account.html`, `js/auth-core.js`, `js/auth-pages.js`, and `js/account.js`.

## Demo payment methods

Checkout requires a payment-method selection: GCash, Maya, QR payment, online banking or cash on delivery. Online banking also requires a sample bank selection. The selected option, example bank and explicit simulated status are saved in account order history. Older orders remain readable.

All methods are simulations: no payment gateway, wallet connection, bank transfer, real COD delivery, PIN/OTP fields, or bank-account details exist. The QR code encodes only a plain-text “NEXTMARKET DEMO ONLY” message. Scanning it does not initiate payment. Real payment collection requires a separate provider integration and backend.

Files: `js/payments.js`, `assets/images/demo-payment-qr.png`; checkout integration in `js/cart.js` and receipts in `js/account.js`.
