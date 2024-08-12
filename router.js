import homePage from "./src/pages/homePage.vue";
import successPage from "./src/pages/successPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "",
        component: homePage,
        children: [
            {
                path: "/success",
                component: successPage,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;