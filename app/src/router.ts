import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("./components/products/products-list.vue"),
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("./components/product-details/product-details.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/create-product/create-product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
