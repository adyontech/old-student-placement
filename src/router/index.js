import Vue from "vue";
import Router from "vue-router";
import {
    ifAuthenticated,
    ifNotAuthenticated
} from './routerLogic'

const Home = () =>
    import ("@/components/outer/home/home.vue");

const innerPages = () =>
    import ("@/components/innerPages/innerPages.vue");
import innerPagesRoutes from "@/components/innerPages/innerPages.router-index.js";

const entryPages = () =>
    import ("@/components/entryPages/entryPages.vue");
import entryPagesRoutes from "@/components/entryPages/entryPagesRoutes.index";
Vue.use(Router);

import './routerLogic'
export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        }, {
            path: "/auth",
            name: "auth",
            component: entryPages,
            children: [...entryPagesRoutes],
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: "/",
            name: "innerPages",
            component: innerPages,
            children: [...innerPagesRoutes],
        },
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
