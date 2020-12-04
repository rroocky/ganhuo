import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout"
import Home from "@/views/home"
import Dayly from "@/views/dayly"
import Android from "@/views/android"
import Ios from "@/views/ios"
import Web from "@/views/web"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home,
                meta: {
                    title: "首页",
                    keepAlive: true
                },
            }
        ]
    },
    {
        path: "/dayly",
        name: "dayly",
        component: Layout,
        children: [
            {
                path: '/',
                component: Dayly,
                meta: {
                    title: "首页"
                }
            }
        ]
    },
    {
        path: "/web",
        name: "web",
        component: Layout,
        children: [
            {
                path: '/',
                component: Web,
                meta: {
                    title: "首页"
                }
            }
        ]
    },
    {
        path: "/android",
        name: "android",
        component: Layout,
        children: [
            {
                path: '/',
                component: Android,
                meta: {
                    title: "首页"
                }
            }
        ]
    },
    {
        path: "/ios",
        name: "ios",
        component: Layout,
        children: [
            {
                path: '/',
                component: Ios,
                meta: {
                    title: "首页"
                }
            }
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
