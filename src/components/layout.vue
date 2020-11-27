<template>
    <div>
        <app-header
            :status="asideStatus"
            @openAsideNavBar="activeAside"
        ></app-header>
        <app-nav :status="asideStatus"></app-nav>
        <app-main></app-main>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppNav from "@/components/AppNav";
import AppMain from "@/components/AppMain";
export default {
    components: {
        AppHeader,
        AppNav,
        AppMain
    },
    data() {
        return {
            asideStatus: false
        };
    },
    methods: {
        //显示侧边导航栏
        activeAside() {
            this.asideStatus = true;
            console.log(this.asideStatus);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>