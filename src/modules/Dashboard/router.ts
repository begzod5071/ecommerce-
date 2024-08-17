export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/modules/Dashboard/views/Dashboard.vue"),
    meta: {
      loginNotRequired: true,
      layout: "DashboardLayout",
    },
  },
];
