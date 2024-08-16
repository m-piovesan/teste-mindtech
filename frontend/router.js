import layout from "./src/layouts/layout.vue";
import homePage from "./src/pages/homePage.vue";
import successPage from "./src/pages/successPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: layout,
        children: [
            {
                path: "",
                component: homePage,
            },
            {
                path: "success",
                component: successPage,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;