import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("./components/ProductsList.vue"),
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("./components/ProductDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
