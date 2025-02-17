// src/config/ecommerce.config.js
export default {
    site: {
      name: "Products Heaven",
      logo: "/assets/images/logo.png",
      defaultCurrency: "USD",
      currencySymbol: "$",
      taxRate: 0.08, // 8% tax
      shippingCost: 5.99,
      freeShippingThreshold: 50,
    },
    api: {
      baseURL: "https://api.products-heaven.com/v1",
      endpoints: {
        products: "/products",
        categories: "/categories",
        users: "/users",
        orders: "/orders",
      },
    },
    payment: {
      stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
      paypalClientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
      supportedMethods: ["card", "paypal", "apple_pay"],
    },
    analytics: {
      googleAnalyticsId: "G-XXXXXXXXXX",
      facebookPixelId: "XXXXXXXXXXXXXXX",
    },
    social: {
      facebook: "https://facebook.com/productsheaven",
      instagram: "https://instagram.com/productsheaven",
      twitter: "https://twitter.com/productsheaven",
    },
    theme: {
      colors: {
        primary: "#2F3C7E",
        secondary: "#FBEAEB",
        accent: "#FF5A5F",
      },
      breakpoints: {
        mobile: "768px",
        tablet: "1024px",
      },
    },
    navigation: {
      header: [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/products" },
        { name: "Categories", path: "/categories" },
      ],
      footer: [
        { title: "Customer Service", links: ["Contact Us", "FAQ", "Returns"] },
        { title: "Company", links: ["About Us", "Careers", "Blog"] },
      ],
    },
    seo: {
      defaultMeta: {
        title: "Products Heaven - Your Premium Shopping Destination",
        description: "Discover amazing products at unbeatable prices",
        keywords: "ecommerce, shopping, electronics, fashion",
      },
      ogTags: {
        type: "website",
        image: "/assets/images/og-image.jpg",
      },
    },
  };