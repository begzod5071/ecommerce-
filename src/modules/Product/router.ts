export default [
  {
    path: "/product/:id",
    name: "productItem",
    component: () => import("@/modules/Product/views/Product.vue"),
    meta: {
      loginNotRequired: true,
      layout: "MainLayout",
    },
  },

  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/modules/Product/views/Checkout.vue"),
    meta: {
      loginNotRequired: true,
      layout: "MainLayout",
    },
  },

  {
    path: "/success",
    name: "success",
    component: () => import("@/modules/Product/views/SuccessOrder.vue"),
    meta: {
      loginNotRequired: true,
      layout: "MainLayout",
    },
  },
];
