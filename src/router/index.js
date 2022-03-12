import Vue from "vue";
import VueRouter from "vue-router";
import { getInstance } from "../auth";

Vue.use(VueRouter);
/* eslint-disable */

const routes = [{
        path: "/",
        title: "Login",
        name: "Login",
        component: () =>
            import ("@/components/LoginPage"),
        meta: {
            requireAuth: false
        }

    },
    {
        path: "/search",
        title: "Search",
        name: "Search",
        component: () =>
            import ("@/components/SearchField"),
        meta: {
            requireAuth: true
        }

    },
    {
        path: "/search-result",
        title: "Search Result",
        name: "Search Result",
        component: () =>
            import ("@/components/SearchResult"),
        meta: {
            requireAuth: true
        }

    }
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (getInstance().isAuthenticated) {
            next();
        } else {
            next({ name: "Login" })
        }
    } else {
        next();
    }
})

export default router;