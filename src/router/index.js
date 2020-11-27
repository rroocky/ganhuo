import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout"
import Home from "@/views/home"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home,
                meta: {
                    title: "首页"
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
