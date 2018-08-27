// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
window.Vue = Vue;
import App from "./App";
import router from "./router/index";
import store from "./store/store";
import "./../node_modules/vuetify/src/stylus/app.styl";
import "@/utils/filters";
import ve from "./vuetify.theme.js";

require("smoothscroll-polyfill")
    .polyfill();
require("babel-polyfill");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: {
        App
    },
    template: "<App/>"
});
