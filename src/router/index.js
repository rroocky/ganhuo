import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout"
import Home from "@/views/home"
import Dayly from "@/views/dayly"
import Android from "@/views/android"
import Ios from "@/views/ios"
import Flutter from "@/views/flutter"
import Girls from "@/views/article/girls"
import TecArticle from "@/views/article/techArticle"
import Err from "@/views/err"

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
                }
            },
            {
                path: '/home/:id',
                component: Girls
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
                    title: "每日推荐",
                    keepAlive: true
                }
            },
            {
                path: '/dayly/:id',
                component: Girls
            }
        ]
    },
    {
        path: "/flutter",
        name: "flutter",
        component: Layout,
        children: [
            {
                path: '/',
                component: Flutter,
                meta: {
                    title: "Flutter",
                    keepAlive: true
                }
            },
            // flutter技术文章详情页
            {
                path: 'article/:id',
                component: TecArticle
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
                    title: "Android",
                    keepAlive: true
                }
            },
            // 安卓技术文章详情页
            {
                path: 'article/:id',
                component: TecArticle
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
                    title: "Ios",
                    keepAlive: true
                }
            },
            // ios技术文章详情页
            {
                path: 'article/:id',
                component: TecArticle
            }
        ]
    },
    {
        // 404
        path: "*",
        name: 'error',
        component: Err
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
