<template>
    <div>
        <div id="mask" v-show="status.menuShow" @click="closeAside"></div>
        <app-header class="header"></app-header>
        <app-nav class="nav"></app-nav>
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
            // 侧边导航栏状态
            status: this.$store.state.status
        };
    },
    methods: {
        // 点击mask遮罩，关闭侧边导航
        closeAside() {
            this.$store.commit("UPDATE_MENU_SHOW");
        }
    }
};
</script>

<style lang="scss" scoped>
#mask {
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 9998;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.nav {
    z-index: 2;
}
</style>