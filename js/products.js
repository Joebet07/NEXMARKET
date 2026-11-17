/* All prices and transactions are simulated. */
const DEMO_NOW = new Date("2026-11-13T19:00:00+08:00");
const BASE_PRODUCTS = [
  {
    id: 101,
    name: "Apple AirPods Max Silver",
    brand: "Apple",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 27990,
    originalPrice: 31900,
    stock: 6,
    images: ["assets/images/product-101-0.webp"],
    description:
      "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    specs: {
      Model: "Apple AirPods Max Silver",
      SKU: "MOB-APP-APP-101",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-13",
    popularity: 560,
    lowestAsk: 27990,
    highestBid: 25470,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 28410,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 28510,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 28350,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 28480,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 28240,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 28340,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 28190,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 28310,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 28070,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 28170,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 28020,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 28140,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 27910,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 28330,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 28160,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 27930,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 28070,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 27990,
      },
    ],
  },
  {
    id: 102,
    name: "iPhone 13 Pro",
    brand: "Apple",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 35990,
    originalPrice: 41000,
    stock: 7,
    images: [
      "assets/images/product-123-0.webp",
      "assets/images/product-123-1.webp",
      "assets/images/product-123-2.webp",
    ],
    description:
      "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    specs: {
      Model: "iPhone 13 Pro",
      SKU: "SMA-APP-IPH-123",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-12",
    popularity: 547,
    lowestAsk: 35990,
    highestBid: 32750,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 35230,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 35470,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 35380,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 35650,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 35450,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 35680,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 35590,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 35860,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 35670,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 35900,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 35810,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 36080,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 35880,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 36420,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 36210,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 35920,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 36100,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 35990,
      },
    ],
  },
  {
    id: 103,
    name: "Apple MacBook Pro 14 Inch Space Grey",
    brand: "Apple",
    category: "Laptops & Desktops",
    condition: "Brand New",
    grade: "",
    price: 89990,
    originalPrice: 102600,
    stock: 8,
    images: [
      "assets/images/product-78-0.webp",
      "assets/images/product-78-1.webp",
      "assets/images/product-78-2.webp",
    ],
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    specs: {
      Model: "Apple MacBook Pro 14 Inch Space Grey",
      SKU: "LAP-APP-APP-078",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-11",
    popularity: 534,
    lowestAsk: 89990,
    highestBid: 81890,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 88100,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 88690,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 88460,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 89140,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 88640,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 89230,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 89000,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 89680,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 89180,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 89770,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 89540,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 90210,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 89720,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 91070,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 90530,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 89810,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 90260,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 89990,
      },
    ],
  },
  {
    id: 104,
    name: "Apple Airpods",
    brand: "Apple",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 7990,
    originalPrice: 9100,
    stock: 9,
    images: [
      "assets/images/product-100-0.webp",
      "assets/images/product-100-1.webp",
      "assets/images/product-100-2.webp",
    ],
    description:
      "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    specs: {
      Model: "Apple Airpods",
      SKU: "MOB-APP-APP-100",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-10",
    popularity: 521,
    lowestAsk: 7990,
    highestBid: 7270,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 8110,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 8140,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 8090,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 8130,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 8060,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 8090,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 8050,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 8080,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 8010,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 8040,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 8000,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 8030,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 7970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 8090,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 8040,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 7970,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 8010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 7990,
      },
    ],
  },
  {
    id: 105,
    name: "Asus Zenbook Pro Dual Screen Laptop",
    brand: "ASUS",
    category: "Laptops & Desktops",
    condition: "Brand New",
    grade: "",
    price: 79990,
    originalPrice: 91200,
    stock: 6,
    images: [
      "assets/images/product-79-0.webp",
      "assets/images/product-79-1.webp",
      "assets/images/product-79-2.webp",
    ],
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    specs: {
      Model: "Asus Zenbook Pro Dual Screen Laptop",
      SKU: "LAP-ASU-ASU-079",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-09",
    popularity: 508,
    lowestAsk: 79990,
    highestBid: 72790,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 78310,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 78830,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 78630,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 79230,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 78790,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 79310,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 79110,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 79710,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 79270,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 79790,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 79590,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 80190,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 79750,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 80950,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 80470,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 79830,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 80230,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 79990,
      },
    ],
  },
  {
    id: 106,
    name: "Samsung Galaxy S10",
    brand: "Samsung",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 12990,
    originalPrice: 14800,
    stock: 7,
    images: [
      "assets/images/product-133-0.webp",
      "assets/images/product-133-1.webp",
      "assets/images/product-133-2.webp",
    ],
    description:
      "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    specs: {
      Model: "Samsung Galaxy S10",
      SKU: "SMA-SAM-SAM-133",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-08",
    popularity: 495,
    lowestAsk: 12990,
    highestBid: 11820,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 12720,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 12800,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 12770,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 12870,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 12800,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 12880,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 12850,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 12940,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 12870,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 12960,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 12930,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 13020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 12950,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 13150,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 13070,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 12960,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 13030,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 12990,
      },
    ],
  },
  {
    id: 107,
    name: "Apple HomePod Mini Cosmic Grey",
    brand: "Apple",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 5990,
    originalPrice: 6800,
    stock: 8,
    images: ["assets/images/product-103-0.webp"],
    description:
      "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    specs: {
      Model: "Apple HomePod Mini Cosmic Grey",
      SKU: "MOB-APP-APP-103",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-07",
    popularity: 482,
    lowestAsk: 5990,
    highestBid: 5450,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 6080,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 6100,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 6070,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 6090,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 6040,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 6060,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 6030,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 6060,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 6010,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 6030,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 6000,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 6020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 5970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 6060,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 6030,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 5980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 6010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 5990,
      },
    ],
  },
  {
    id: 108,
    name: "Samsung Galaxy Tab S8 Plus Grey",
    brand: "Samsung",
    category: "Tablets",
    condition: "Brand New",
    grade: "",
    price: 38990,
    originalPrice: 44400,
    stock: 9,
    images: [
      "assets/images/product-160-0.webp",
      "assets/images/product-160-1.webp",
      "assets/images/product-160-2.webp",
    ],
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    specs: {
      Model: "Samsung Galaxy Tab S8 Plus Grey",
      SKU: "TAB-SAM-SAM-160",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-06",
    popularity: 469,
    lowestAsk: 38990,
    highestBid: 35480,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 38170,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 38420,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 38330,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 38620,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 38410,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 38660,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 38560,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 38850,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 38640,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 38890,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 38800,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 39090,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 38870,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 39460,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 39220,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 38910,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 39110,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 38990,
      },
    ],
  },
  {
    id: 109,
    name: "Lenovo Yoga 920",
    brand: "Lenovo",
    category: "Laptops & Desktops",
    condition: "Brand New",
    grade: "",
    price: 32990,
    originalPrice: 37600,
    stock: 6,
    images: [
      "assets/images/product-81-0.webp",
      "assets/images/product-81-1.webp",
      "assets/images/product-81-2.webp",
    ],
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    specs: {
      Model: "Lenovo Yoga 920",
      SKU: "LAP-LEN-LEN-081",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-05",
    popularity: 456,
    lowestAsk: 32990,
    highestBid: 30020,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 32300,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 32510,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 32430,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 32680,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 32500,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 32710,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 32630,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 32870,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 32690,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 32910,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 32830,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 33070,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 32890,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 33390,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 33190,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 32920,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 33090,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 32990,
      },
    ],
  },
  {
    id: 110,
    name: "New DELL XPS 13 9300 Laptop",
    brand: "Dell",
    category: "Laptops & Desktops",
    condition: "Brand New",
    grade: "",
    price: 59990,
    originalPrice: 68400,
    stock: 7,
    images: [
      "assets/images/product-82-0.webp",
      "assets/images/product-82-1.webp",
      "assets/images/product-82-2.webp",
    ],
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    specs: {
      Model: "New DELL XPS 13 9300 Laptop",
      SKU: "LAP-DEL-DEL-082",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-04",
    popularity: 443,
    lowestAsk: 59990,
    highestBid: 54590,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 60890,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 61100,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 60770,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 61040,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 60530,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 60740,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 60410,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 60680,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 60170,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 60380,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 60050,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 60320,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 59810,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 60710,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 60350,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 59870,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 60170,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 59990,
      },
    ],
  },
  {
    id: 111,
    name: "Apple Watch Series 4 Gold",
    brand: "Apple",
    category: "Wearables",
    condition: "Brand New",
    grade: "",
    price: 9990,
    originalPrice: 11400,
    stock: 8,
    images: [
      "assets/images/product-106-0.webp",
      "assets/images/product-106-1.webp",
      "assets/images/product-106-2.webp",
    ],
    description:
      "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    specs: {
      Model: "Apple Watch Series 4 Gold",
      SKU: "MOB-APP-APP-106",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-03",
    popularity: 430,
    lowestAsk: 9990,
    highestBid: 9090,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 9780,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 9850,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 9820,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 9900,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 9840,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 9910,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 9880,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 9960,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 9900,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 9970,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 9940,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 10010,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 9960,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 10110,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 10050,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 9970,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 10020,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 9990,
      },
    ],
  },
  {
    id: 112,
    name: "Beats Flex Wireless Earphones",
    brand: "Beats",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 3490,
    originalPrice: 4000,
    stock: 9,
    images: ["assets/images/product-107-0.webp"],
    description:
      "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    specs: {
      Model: "Beats Flex Wireless Earphones",
      SKU: "MOB-BEA-BEA-107",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-02",
    popularity: 417,
    lowestAsk: 3490,
    highestBid: 3180,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 3420,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 3440,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 3430,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 3460,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 3440,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 3460,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 3450,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 3460,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 3470,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 3500,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 3530,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 3510,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 3500,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 3490,
      },
    ],
  },
  {
    id: 113,
    name: "Apple MagSafe Battery Pack",
    brand: "Apple",
    category: "Other Electronics",
    condition: "Brand New",
    grade: "",
    price: 4990,
    originalPrice: 5700,
    stock: 6,
    images: [
      "assets/images/product-105-0.webp",
      "assets/images/product-105-1.webp",
    ],
    description:
      "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    specs: {
      Model: "Apple MagSafe Battery Pack",
      SKU: "MOB-APP-APP-105",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 404,
    lowestAsk: 4990,
    highestBid: 4540,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 5060,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 5080,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 5080,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 5030,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 4990,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 4990,
      },
    ],
  },
  {
    id: 114,
    name: "Apple Airpower Wireless Charger",
    brand: "Apple",
    category: "Other Electronics",
    condition: "Brand New",
    grade: "",
    price: 2490,
    originalPrice: 2800,
    stock: 7,
    images: ["assets/images/product-102-0.webp"],
    description:
      "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    specs: {
      Model: "Apple Airpower Wireless Charger",
      SKU: "MOB-APP-APP-102",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-12",
    popularity: 391,
    lowestAsk: 2490,
    highestBid: 2270,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 2440,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 2470,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 2470,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 2460,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 2480,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 2470,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 2480,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 2480,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 2500,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 2480,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 2520,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 2500,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 2490,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 2500,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 2490,
      },
    ],
  },
  {
    id: 115,
    name: "iPhone 12 Silicone Case with MagSafe Plum",
    brand: "Apple",
    category: "Other Electronics",
    condition: "Brand New",
    grade: "",
    price: 1290,
    originalPrice: 1500,
    stock: 8,
    images: [
      "assets/images/product-108-0.webp",
      "assets/images/product-108-1.webp",
      "assets/images/product-108-2.webp",
    ],
    description:
      "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    specs: {
      Model: "iPhone 12 Silicone Case with MagSafe Plum",
      SKU: "MOB-APP-IPH-108",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-11",
    popularity: 378,
    lowestAsk: 1290,
    highestBid: 1170,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 1260,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 1270,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 1270,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 1280,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 1270,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 1280,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 1280,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 1280,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 1280,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 1310,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 1300,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 1290,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 1290,
      },
    ],
  },
  {
    id: 116,
    name: "iPad Mini 2021 Starlight",
    brand: "Apple",
    category: "Tablets",
    condition: "Brand New",
    grade: "",
    price: 23990,
    originalPrice: 27300,
    stock: 9,
    images: [
      "assets/images/product-159-0.webp",
      "assets/images/product-159-1.webp",
      "assets/images/product-159-2.webp",
    ],
    description:
      "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    specs: {
      Model: "iPad Mini 2021 Starlight",
      SKU: "TAB-APP-IPA-159",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-10",
    popularity: 365,
    lowestAsk: 23990,
    highestBid: 21830,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 24350,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 24430,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 24300,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 24410,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 24210,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 24290,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 24160,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 24270,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 24060,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 24150,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 24010,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 24120,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 23920,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 24280,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 24130,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 23940,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 24060,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 23990,
      },
    ],
  },
  {
    id: 117,
    name: "Oppo A57",
    brand: "Oppo",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 7990,
    originalPrice: 9100,
    stock: 6,
    images: [
      "assets/images/product-125-0.webp",
      "assets/images/product-125-1.webp",
      "assets/images/product-125-2.webp",
    ],
    description:
      "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    specs: {
      Model: "Oppo A57",
      SKU: "SMA-OPP-OPP-125",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-09",
    popularity: 352,
    lowestAsk: 7990,
    highestBid: 7270,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 7820,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 7870,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 7850,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 7910,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 7870,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 7920,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 7900,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 7960,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 7920,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 7970,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 7950,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 8010,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 7970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 8090,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 8040,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 7970,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 8010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 7990,
      },
    ],
  },
  {
    id: 118,
    name: "Oppo F19 Pro Plus",
    brand: "Oppo",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 11990,
    originalPrice: 13700,
    stock: 7,
    images: [
      "assets/images/product-126-0.webp",
      "assets/images/product-126-1.webp",
      "assets/images/product-126-2.webp",
    ],
    description:
      "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    specs: {
      Model: "Oppo F19 Pro Plus",
      SKU: "SMA-OPP-OPP-126",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-08",
    popularity: 339,
    lowestAsk: 11990,
    highestBid: 10910,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 11740,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 11820,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 11790,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 11880,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 11810,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 11890,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 11860,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 11950,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 11880,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 11960,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 11930,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 12020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 11950,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 12130,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 12060,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 11970,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 12030,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 11990,
      },
    ],
  },
  {
    id: 119,
    name: "Realme C35",
    brand: "Realme",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 6490,
    originalPrice: 7400,
    stock: 8,
    images: [
      "assets/images/product-128-0.webp",
      "assets/images/product-128-1.webp",
      "assets/images/product-128-2.webp",
    ],
    description:
      "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    specs: {
      Model: "Realme C35",
      SKU: "SMA-REA-REA-128",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-07",
    popularity: 326,
    lowestAsk: 6490,
    highestBid: 5910,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 6590,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 6610,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 6570,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 6600,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 6550,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 6570,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 6540,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 6560,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 6510,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 6530,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 6500,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 6530,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 6470,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 6570,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 6530,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 6480,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 6510,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 6490,
      },
    ],
  },
  {
    id: 120,
    name: "Samsung Galaxy S8",
    brand: "Samsung",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 8990,
    originalPrice: 10200,
    stock: 9,
    images: [
      "assets/images/product-132-0.webp",
      "assets/images/product-132-1.webp",
      "assets/images/product-132-2.webp",
    ],
    description:
      "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    specs: {
      Model: "Samsung Galaxy S8",
      SKU: "SMA-SAM-SAM-132",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-06",
    popularity: 313,
    lowestAsk: 8990,
    highestBid: 8180,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 8800,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 8860,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 8840,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 8900,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 8860,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 8910,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 8890,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 8960,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 8910,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 8970,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 8950,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 9010,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 8960,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 9100,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 9040,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 8970,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 9020,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 8990,
      },
    ],
  },
  {
    id: 121,
    name: "Vivo S1",
    brand: "Vivo",
    category: "Smartphones",
    condition: "Brand New",
    grade: "",
    price: 6990,
    originalPrice: 8000,
    stock: 0,
    images: [
      "assets/images/product-134-0.webp",
      "assets/images/product-134-1.webp",
      "assets/images/product-134-2.webp",
    ],
    description:
      "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    specs: {
      Model: "Vivo S1",
      SKU: "SMA-VIV-VIV-134",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-05",
    popularity: 300,
    lowestAsk: 6990,
    highestBid: 6360,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 6840,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 6890,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 6870,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 6920,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 6890,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 6930,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 6910,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 6930,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 6960,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 7010,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 7070,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 7030,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 6980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 7010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 6990,
      },
    ],
  },
  {
    id: 122,
    name: "Amazon Echo Plus",
    brand: "Amazon",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 4990,
    originalPrice: 5700,
    stock: 7,
    images: [
      "assets/images/product-99-0.webp",
      "assets/images/product-99-1.webp",
    ],
    description:
      "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    specs: {
      Model: "Amazon Echo Plus",
      SKU: "MOB-AMA-AMA-099",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-04",
    popularity: 287,
    lowestAsk: 4990,
    highestBid: 4540,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 5060,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 5080,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 5080,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 5030,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 4990,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 4990,
      },
    ],
  },
  {
    id: 123,
    name: "Apple iPhone Charger",
    brand: "Apple",
    category: "Other Electronics",
    condition: "Brand New",
    grade: "",
    price: 1490,
    originalPrice: 1700,
    stock: 8,
    images: [
      "assets/images/product-104-0.webp",
      "assets/images/product-104-1.webp",
    ],
    description:
      "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    specs: {
      Model: "Apple iPhone Charger",
      SKU: "MOB-APP-APP-104",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-03",
    popularity: 274,
    lowestAsk: 1490,
    highestBid: 1360,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 1460,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 1470,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 1460,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 1480,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 1470,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 1480,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 1470,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 1480,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 1480,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 1490,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 1480,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 1490,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 1490,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 1510,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 1500,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 1490,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 1490,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 1490,
      },
    ],
  },
  {
    id: 124,
    name: "Huawei Matebook X Pro",
    brand: "Huawei",
    category: "Laptops & Desktops",
    condition: "Brand New",
    grade: "",
    price: 52990,
    originalPrice: 60400,
    stock: 9,
    images: [
      "assets/images/product-80-0.webp",
      "assets/images/product-80-1.webp",
      "assets/images/product-80-2.webp",
    ],
    description:
      "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    specs: {
      Model: "Huawei Matebook X Pro",
      SKU: "LAP-HUA-HUA-080",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-02",
    popularity: 261,
    lowestAsk: 52990,
    highestBid: 48220,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 51880,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 52220,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 52090,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 52490,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 52200,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 52540,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 52410,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 52800,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 52510,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 52860,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 52730,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 53120,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 52830,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 53630,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 53310,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 52880,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 53150,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 52990,
      },
    ],
  },
  {
    id: 125,
    name: "Apple AirPods Max Silver",
    brand: "Apple",
    category: "Audio",
    condition: "Used",
    grade: "Like New",
    price: 19590,
    originalPrice: 27990,
    stock: 1,
    images: ["assets/images/product-101-0.webp"],
    description:
      "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    specs: {
      Model: "Apple AirPods Max Silver",
      SKU: "MOB-APP-APP-101",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-13",
    popularity: 560,
    lowestAsk: 19590,
    highestBid: 17630,
    seller: "Second Life Tech",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 19880,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 19950,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 19840,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 19930,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 19770,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 19830,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 19730,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 19820,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 19650,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 19720,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 19610,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 19700,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 19530,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 19830,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 19710,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 19550,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 19650,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 19590,
      },
    ],
  },
  {
    id: 126,
    name: "iPhone 13 Pro",
    brand: "Apple",
    category: "Smartphones",
    condition: "Used",
    grade: "Excellent",
    price: 25190,
    originalPrice: 35990,
    stock: 1,
    images: [
      "assets/images/product-123-0.webp",
      "assets/images/product-123-1.webp",
      "assets/images/product-123-2.webp",
    ],
    description:
      "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    specs: {
      Model: "iPhone 13 Pro",
      SKU: "SMA-APP-IPH-123",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-12",
    popularity: 547,
    lowestAsk: 25190,
    highestBid: 22670,
    seller: "Juan’s Tech Corner",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 24660,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 24820,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 24760,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 24950,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 24810,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 24980,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 24910,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 25100,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 24960,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 25130,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 25060,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 25250,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 25110,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 25490,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 25340,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 25140,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 25270,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 25190,
      },
    ],
  },
  {
    id: 127,
    name: "Apple MacBook Pro 14 Inch Space Grey",
    brand: "Apple",
    category: "Laptops & Desktops",
    condition: "Used",
    grade: "Good",
    price: 62990,
    originalPrice: 89990,
    stock: 1,
    images: [
      "assets/images/product-78-0.webp",
      "assets/images/product-78-1.webp",
      "assets/images/product-78-2.webp",
    ],
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    specs: {
      Model: "Apple MacBook Pro 14 Inch Space Grey",
      SKU: "LAP-APP-APP-078",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-11",
    popularity: 534,
    lowestAsk: 62990,
    highestBid: 56690,
    seller: "Reboot Manila",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 61670,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 62080,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 61920,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 62390,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 62050,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 62450,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 62300,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 62770,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 62420,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 62830,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 62680,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 63150,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 62800,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 63750,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 63370,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 62860,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 63180,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 62990,
      },
    ],
  },
  {
    id: 128,
    name: "Apple Airpods",
    brand: "Apple",
    category: "Audio",
    condition: "Used",
    grade: "Fair",
    price: 5590,
    originalPrice: 7990,
    stock: 1,
    images: [
      "assets/images/product-100-0.webp",
      "assets/images/product-100-1.webp",
      "assets/images/product-100-2.webp",
    ],
    description:
      "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    specs: {
      Model: "Apple Airpods",
      SKU: "MOB-APP-APP-100",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-10",
    popularity: 521,
    lowestAsk: 5590,
    highestBid: 5030,
    seller: "Second Life Tech",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 5670,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 5690,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 5660,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 5690,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 5640,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 5660,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 5630,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 5650,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 5610,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 5630,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 5600,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 5620,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 5570,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 5660,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 5620,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 5580,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 5610,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 5590,
      },
    ],
  },
  {
    id: 129,
    name: "Asus Zenbook Pro Dual Screen Laptop",
    brand: "ASUS",
    category: "Laptops & Desktops",
    condition: "Used",
    grade: "Like New",
    price: 55990,
    originalPrice: 79990,
    stock: 1,
    images: [
      "assets/images/product-79-0.webp",
      "assets/images/product-79-1.webp",
      "assets/images/product-79-2.webp",
    ],
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    specs: {
      Model: "Asus Zenbook Pro Dual Screen Laptop",
      SKU: "LAP-ASU-ASU-079",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-09",
    popularity: 508,
    lowestAsk: 55990,
    highestBid: 50390,
    seller: "Juan’s Tech Corner",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 54810,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 55180,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 55040,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 55460,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 55150,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 55510,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 55370,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 55790,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 55490,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 55850,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 55710,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 56130,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 55820,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 56660,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 56330,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 55880,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 56160,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 55990,
      },
    ],
  },
  {
    id: 130,
    name: "Samsung Galaxy S10",
    brand: "Samsung",
    category: "Smartphones",
    condition: "Used",
    grade: "Excellent",
    price: 9090,
    originalPrice: 12990,
    stock: 1,
    images: [
      "assets/images/product-133-0.webp",
      "assets/images/product-133-1.webp",
      "assets/images/product-133-2.webp",
    ],
    description:
      "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    specs: {
      Model: "Samsung Galaxy S10",
      SKU: "SMA-SAM-SAM-133",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "128GB storage (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth, cellular",
      Display: "Touchscreen",
      Color: "As pictured",
    },
    dateAdded: "2026-11-08",
    popularity: 495,
    lowestAsk: 9090,
    highestBid: 8180,
    seller: "Reboot Manila",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 8900,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 8960,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 8940,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 9000,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 8950,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 9010,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 8990,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 9060,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 9010,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 9070,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 9040,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 9110,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 9060,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 9200,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 9140,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 9070,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 9120,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 9090,
      },
    ],
  },
  {
    id: 131,
    name: "Apple HomePod Mini Cosmic Grey",
    brand: "Apple",
    category: "Audio",
    condition: "Used",
    grade: "Good",
    price: 4190,
    originalPrice: 5990,
    stock: 1,
    images: ["assets/images/product-103-0.webp"],
    description:
      "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    specs: {
      Model: "Apple HomePod Mini Cosmic Grey",
      SKU: "MOB-APP-APP-103",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-07",
    popularity: 482,
    lowestAsk: 4190,
    highestBid: 3770,
    seller: "Second Life Tech",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 4250,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 4270,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 4240,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 4260,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 4230,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 4240,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 4220,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 4240,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 4200,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 4220,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 4190,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 4210,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 4180,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 4240,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 4220,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 4180,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 4200,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 4190,
      },
    ],
  },
  {
    id: 132,
    name: "Samsung Galaxy Tab S8 Plus Grey",
    brand: "Samsung",
    category: "Tablets",
    condition: "Used",
    grade: "Fair",
    price: 27290,
    originalPrice: 38990,
    stock: 1,
    images: [
      "assets/images/product-160-0.webp",
      "assets/images/product-160-1.webp",
      "assets/images/product-160-2.webp",
    ],
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    specs: {
      Model: "Samsung Galaxy Tab S8 Plus Grey",
      SKU: "TAB-SAM-SAM-160",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-06",
    popularity: 469,
    lowestAsk: 27290,
    highestBid: 24560,
    seller: "Juan’s Tech Corner",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 26720,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 26890,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 26830,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 27030,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 26880,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 27060,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 26990,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 27190,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 27040,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 27220,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 27150,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 27360,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 27210,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 27620,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 27450,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 27240,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 27370,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 27290,
      },
    ],
  },
  {
    id: 133,
    name: "Lenovo Yoga 920",
    brand: "Lenovo",
    category: "Laptops & Desktops",
    condition: "Used",
    grade: "Like New",
    price: 23090,
    originalPrice: 32990,
    stock: 1,
    images: [
      "assets/images/product-81-0.webp",
      "assets/images/product-81-1.webp",
      "assets/images/product-81-2.webp",
    ],
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    specs: {
      Model: "Lenovo Yoga 920",
      SKU: "LAP-LEN-LEN-081",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-05",
    popularity: 456,
    lowestAsk: 23090,
    highestBid: 20780,
    seller: "Reboot Manila",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 22610,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 22760,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 22700,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 22870,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 22740,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 22890,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 22840,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 23010,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 22880,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 23030,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 22970,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 23150,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 23020,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 23370,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 23230,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 23040,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 23160,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 23090,
      },
    ],
  },
  {
    id: 134,
    name: "New DELL XPS 13 9300 Laptop",
    brand: "Dell",
    category: "Laptops & Desktops",
    condition: "Used",
    grade: "Excellent",
    price: 41990,
    originalPrice: 59990,
    stock: 1,
    images: [
      "assets/images/product-82-0.webp",
      "assets/images/product-82-1.webp",
      "assets/images/product-82-2.webp",
    ],
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    specs: {
      Model: "New DELL XPS 13 9300 Laptop",
      SKU: "LAP-DEL-DEL-082",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Listing configuration": "16GB RAM / 512GB SSD (demo variant)",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Charger included",
      "Configuration note":
        "Verify the exact processor and ports with the seller",
    },
    dateAdded: "2026-11-04",
    popularity: 443,
    lowestAsk: 41990,
    highestBid: 37790,
    seller: "Second Life Tech",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 42620,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 42770,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 42540,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 42720,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 42370,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 42510,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 42280,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 42470,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 42120,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 42260,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 42030,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 42220,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 41860,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 42490,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 42240,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 41910,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 42120,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 41990,
      },
    ],
  },
  {
    id: 135,
    name: "Apple Watch Series 4 Gold",
    brand: "Apple",
    category: "Wearables",
    condition: "Used",
    grade: "Good",
    price: 6990,
    originalPrice: 9990,
    stock: 1,
    images: [
      "assets/images/product-106-0.webp",
      "assets/images/product-106-1.webp",
      "assets/images/product-106-2.webp",
    ],
    description:
      "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    specs: {
      Model: "Apple Watch Series 4 Gold",
      SKU: "MOB-APP-APP-106",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      "Configuration note":
        "Sample configuration; confirm exact specifications before a real purchase",
    },
    dateAdded: "2026-11-03",
    popularity: 430,
    lowestAsk: 6990,
    highestBid: 6290,
    seller: "Juan’s Tech Corner",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 6840,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 6890,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 6870,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 6920,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 6890,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 6930,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 6910,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 6930,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 6960,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 7010,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 6970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 7070,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 7030,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 6980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 7010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 6990,
      },
    ],
  },
  {
    id: 136,
    name: "Beats Flex Wireless Earphones",
    brand: "Beats",
    category: "Audio",
    condition: "Used",
    grade: "Fair",
    price: 2440,
    originalPrice: 3490,
    stock: 1,
    images: ["assets/images/product-107-0.webp"],
    description:
      "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    specs: {
      Model: "Beats Flex Wireless Earphones",
      SKU: "MOB-BEA-BEA-107",
      Package: "Device and standard accessories",
      Warranty: "12-month sample warranty",
      Connectivity: "Wireless / Bluetooth",
      Use: "Music and calls",
      Controls: "On-device controls",
    },
    dateAdded: "2026-11-02",
    popularity: 417,
    lowestAsk: 2440,
    highestBid: 2200,
    seller: "Reboot Manila",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 2390,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 2400,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 2400,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 2420,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 2400,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 2420,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 2410,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 2430,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 2420,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 2430,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 2430,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 2430,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 2470,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 2440,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 2450,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 2440,
      },
    ],
  },
  {
    id: 137,
    name: "Logitech Wireless Gaming Mouse",
    brand: "Logitech",
    category: "Gaming Accessories",
    condition: "Brand New",
    grade: "",
    price: 3490,
    originalPrice: 4188,
    stock: 5,
    images: ["assets/images/extra-0.jpg"],
    description:
      "Illustrative electronics listing for the NEXTMARKET academic demo. The stock photograph represents this product category, not a verified photo of a particular model.",
    specs: {
      "Listing type": "Illustrative demo",
      Model: "Sample configuration",
      Photo: "Representative category photograph",
      Compatibility: "Verify exact model before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 300,
    lowestAsk: 3490,
    highestBid: 3141,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 3540,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 3550,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 3540,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 3550,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 3520,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 3530,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 3510,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 3530,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 3500,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 3510,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 3490,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 3510,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 3530,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 3510,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 3480,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 3500,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 3490,
      },
    ],
  },
  {
    id: 138,
    name: "Razer Mechanical Gaming Keyboard",
    brand: "Razer",
    category: "Gaming Accessories",
    condition: "Brand New",
    grade: "",
    price: 5990,
    originalPrice: 7188,
    stock: 5,
    images: ["assets/images/extra-1.jpg"],
    description:
      "Illustrative electronics listing for the NEXTMARKET academic demo. The stock photograph represents this product category, not a verified photo of a particular model.",
    specs: {
      "Listing type": "Illustrative demo",
      Model: "Sample configuration",
      Photo: "Representative category photograph",
      Compatibility: "Verify exact model before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 290,
    lowestAsk: 5990,
    highestBid: 5391,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 5860,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 5900,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 5890,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 5930,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 5900,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 5940,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 5920,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 5970,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 5940,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 5980,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 5960,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 6000,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 5970,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 6060,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 6030,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 5980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 6010,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 5990,
      },
    ],
  },
  {
    id: 139,
    name: "Sony Wireless Headphones",
    brand: "Sony",
    category: "Audio",
    condition: "Brand New",
    grade: "",
    price: 12990,
    originalPrice: 15588,
    stock: 5,
    images: ["assets/images/extra-2.jpg"],
    description:
      "Illustrative electronics listing for the NEXTMARKET academic demo. The stock photograph represents this product category, not a verified photo of a particular model.",
    specs: {
      "Listing type": "Illustrative demo",
      Model: "Sample configuration",
      Photo: "Representative category photograph",
      Compatibility: "Verify exact model before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 280,
    lowestAsk: 12990,
    highestBid: 11691,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 12720,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 12800,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 12770,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 12870,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 12800,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 12880,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 12850,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 12940,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 12870,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 12960,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 12930,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 13020,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 12950,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 13150,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 13070,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 12960,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 13030,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 12990,
      },
    ],
  },
  {
    id: 140,
    name: "NVIDIA Graphics Card",
    brand: "NVIDIA",
    category: "Computer Components",
    condition: "Brand New",
    grade: "",
    price: 24990,
    originalPrice: 29988,
    stock: 5,
    images: ["assets/images/extra-3.jpg"],
    description:
      "Illustrative electronics listing for the NEXTMARKET academic demo. The stock photograph represents this product category, not a verified photo of a particular model.",
    specs: {
      "Listing type": "Illustrative demo",
      Model: "Sample configuration",
      Photo: "Representative category photograph",
      Compatibility: "Verify exact model before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 270,
    lowestAsk: 24990,
    highestBid: 22491,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 25360,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 25450,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 25310,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 25430,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 25210,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 25300,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 25160,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 25280,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 25060,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 25150,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 25010,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 25130,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 24920,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 25290,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 25140,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 24940,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 25060,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 24990,
      },
    ],
  },
  {
    id: 141,
    name: "Desktop Memory Kit",
    brand: "Kingston",
    category: "Computer Components",
    condition: "Brand New",
    grade: "",
    price: 4990,
    originalPrice: 5988,
    stock: 5,
    images: ["assets/images/extra-4.jpg"],
    description:
      "Illustrative electronics listing for the NEXTMARKET academic demo. The stock photograph represents this product category, not a verified photo of a particular model.",
    specs: {
      "Listing type": "Illustrative demo",
      Model: "Sample configuration",
      Photo: "Representative category photograph",
      Compatibility: "Verify exact model before a real purchase",
    },
    dateAdded: "2026-11-13",
    popularity: 260,
    lowestAsk: 4990,
    highestBid: 4491,
    seller: "NEX Select",
    history: [
      {
        date: "2026-11-01T12:00:00+08:00",
        price: 4890,
      },
      {
        date: "2026-11-02T12:00:00+08:00",
        price: 4920,
      },
      {
        date: "2026-11-03T12:00:00+08:00",
        price: 4910,
      },
      {
        date: "2026-11-04T12:00:00+08:00",
        price: 4940,
      },
      {
        date: "2026-11-05T12:00:00+08:00",
        price: 4920,
      },
      {
        date: "2026-11-06T12:00:00+08:00",
        price: 4950,
      },
      {
        date: "2026-11-07T12:00:00+08:00",
        price: 4940,
      },
      {
        date: "2026-11-08T12:00:00+08:00",
        price: 4970,
      },
      {
        date: "2026-11-09T12:00:00+08:00",
        price: 4950,
      },
      {
        date: "2026-11-10T12:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-11T12:00:00+08:00",
        price: 4970,
      },
      {
        date: "2026-11-12T12:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-13T12:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T14:00:00+08:00",
        price: 5050,
      },
      {
        date: "2026-11-13T15:00:00+08:00",
        price: 5020,
      },
      {
        date: "2026-11-13T16:00:00+08:00",
        price: 4980,
      },
      {
        date: "2026-11-13T17:00:00+08:00",
        price: 5000,
      },
      {
        date: "2026-11-13T18:00:00+08:00",
        price: 4990,
      },
    ],
  },
];
