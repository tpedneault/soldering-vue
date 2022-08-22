import { createRouter, createWebHistory } from "vue-router";
import SolderingView from "../views/SolderingView.vue";
import ImportView from "@/views/ImportView";

const routes = [
  {
    path: "/",
    name: "home",
    component: ImportView,
  },
  {
    path: "/soldering",
    name: "soldering",
    component: SolderingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
