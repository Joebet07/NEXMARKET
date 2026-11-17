// STUDY: historyStats is ordinary arithmetic. Chart configuration at the bottom is a library integration.
/* Reusable chart: summary values and line points use the same selected records. */
let priceChart,
  chartProduct,
  chartRange = "7D";
// Select transactions inside the chosen time window.
function historyFor(product, range) {
  let hours = 24;
  if (range === "7D") hours = 7 * 24;
  if (range === "30D") hours = 30 * 24;
  const startTime = new Date(DEMO_NOW.getTime() - hours * 60 * 60 * 1000);
  const selected = [];
  const records = product.history || [];
  for (let index = 0; index < records.length; index++) {
    const date = new Date(records[index].date);
    if (date >= startTime && date <= DEMO_NOW) selected.push(records[index]);
  }
  selected.sort(function (first, second) {
    return new Date(first.date) - new Date(second.date);
  });
  return selected;
}

// Basic arithmetic: total / count, lowest, highest, and change from first sale.
function historyStats(records) {
  if (records.length === 0)
    return { last: 0, avg: 0, min: 0, max: 0, change: 0, percent: 0 };
  let total = 0;
  let lowest = records[0].price;
  let highest = records[0].price;
  for (let index = 0; index < records.length; index++) {
    const price = records[index].price;
    total = total + price;
    if (price < lowest) lowest = price;
    if (price > highest) highest = price;
  }
  const first = records[0].price;
  const last = records[records.length - 1].price;
  const change = last - first;
  let percent = 0;
  if (first > 0) percent = (change / first) * 100;
  return {
    last: last,
    avg: total / records.length,
    min: lowest,
    max: highest,
    change: change,
    percent: percent,
  };
}
function chartPanel() {
  return `<section class="section panel"><div class="section-head chart-head"><div><div class="eyebrow">A CLEARER VIEW OF VALUE</div><h2>Market Price History</h2></div><div class="timeframes">${["24H", "7D", "30D"].map((range) => `<button data-range="${range}" class="${range === chartRange ? "active" : ""}" aria-pressed="${range === chartRange}">${range}</button>`).join("")}</div></div><p class="note">Simulated transactions • Snapshot: 13 November 2026, 7 PM Philippine time. Not verified live market data.</p><div class="stats" id="chart-stats" aria-live="polite"></div><div class="chart-box"><canvas id="price-chart" role="img" aria-describedby="chart-description" aria-label="Simulated transaction prices over time"></canvas></div><p id="chart-description" class="note mt-3"></p></section>`;
}
function mountChart(product) {
  chartProduct = product;
  getAllElements("[data-range]").forEach(
    (button) =>
      (button.onclick = () => {
        chartRange = button.dataset.range;
        getAllElements("[data-range]").forEach((other) => {
          other.classList.toggle("active", other === button);
          other.setAttribute("aria-pressed", other === button);
        });
        refreshChart();
      }),
  );
  refreshChart();
}
function refreshChart() {
  if (!chartProduct) return;
  const records = historyFor(chartProduct, chartRange),
    stats = historyStats(records);
  const summaries = [
    ["Latest sale", peso(stats.last)],
    ["Average sale", peso(stats.avg)],
    ["Lowest sale", peso(stats.min)],
    ["Highest sale", peso(stats.max)],
    [
      "Price change",
      (stats.change >= 0 ? "+" : "−") + peso(Math.abs(stats.change)),
    ],
    [
      "Percentage change",
      (stats.percent >= 0 ? "+" : "") + stats.percent.toFixed(2) + "%",
    ],
  ];
  getElement("#chart-stats").innerHTML = summaries
    .map(
      ([label, value], index) =>
        `<div class="stat"><small>${label}</small><strong class="${index > 3 ? (stats.change >= 0 ? "positive" : "negative") : ""}">${records.length ? value : "—"}</strong></div>`,
    )
    .join("");
  getElement("#chart-description").textContent =
    records.length > 1
      ? `${records.length} simulated sales in ${chartRange}. ${chartProduct.name}: from ${peso(records[0].price)} to ${peso(stats.last)}. Range ${peso(stats.min)}–${peso(stats.max)}. Each point is a fixed demonstration transaction.`
      : "Not enough historical transactions for this listing. A price trend appears once two or more demo records exist.";
  if (priceChart) priceChart.destroy();
  if (typeof Chart === "undefined") {
    getElement("#chart-description").textContent +=
      " The chart library could not load. The numerical summary remains available; check your internet connection.";
    return;
  }
  const context = getElement("#price-chart").getContext("2d"),
    gradient = context.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(145,199,165,.24)");
  gradient.addColorStop(1, "rgba(145,199,165,0)");
  const muted = getComputedStyle(document.documentElement)
    .getPropertyValue("--muted")
    .trim();
  priceChart = new Chart(context, {
    type: "line",
    data: {
      labels: records.map((record) =>
        new Date(record.date).toLocaleString("en-PH", {
          timeZone: "Asia/Manila",
          month: "short",
          day: "numeric",
          ...(chartRange === "24H" ? { hour: "numeric" } : {}),
        }),
      ),
      datasets: [
        {
          label: "Sale price",
          data: records.map((record) => record.price),
          borderColor: "#91c7a5",
          backgroundColor: gradient,
          fill: true,
          tension: 0.3,
          borderWidth: 2,
          pointRadius: records.length < 10 ? 3 : 1,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) =>
              new Date(records[items[0].dataIndex].date).toLocaleString(
                "en-PH",
                { timeZone: "Asia/Manila" },
              ),
            label: (item) => peso(item.raw),
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: muted, maxTicksLimit: 7 },
          title: {
            display: true,
            text: "Transaction date / time (Philippines)",
            color: muted,
          },
        },
        y: {
          grid: { color: "#88888819" },
          ticks: {
            color: muted,
            callback: (value) => "₱" + (value / 1000).toFixed(1) + "k",
          },
          title: { display: true, text: "Price (PHP)", color: muted },
        },
      },
    },
  });
}
