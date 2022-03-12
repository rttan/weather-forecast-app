import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
/* eslint-disable */

const routes = [{
        path: "/",
        title: "Login",
        name: "Login",
        component: () =>
            import ("@/components/LoginPage"),

    },
    {
        path: "/search",
        title: "Search",
        name: "Search",
        component: () =>
            import ("@/components/SearchField"),

    },
    {
        path: "/search-result",
        title: "Search Result",
        name: "Search Result",
        component: () =>
            import ("@/components/SearchResult"),

    }
];

const router = new VueRouter({
    routes,
});

export default router;