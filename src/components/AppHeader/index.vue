<template>
    <div>
        <van-nav-bar
            :title="status.headerTitle"
            fixed
            :class="['navbar', { active: status.menuShow }]"
        >
            <template #left>
                <van-icon
                    name="wap-nav"
                    size="20"
                    color="#fff"
                    @click="openAsideNavBar"
                />
            </template>
            <template #right>
                <span @click="$router.go(-1)">返回</span>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: this.$store.state.status,
        };
    },
    methods: {
        //打开侧边导航栏,传递激活状态的class,同时给header也添加激活状态的class
        openAsideNavBar() {
            this.$store.commit("UPDATE_MENU_SHOW");
        },
    },
};
</script>

<style lang="scss" scoped>
div.navbar {
    background-color: #2196f3;
    transition: 0.3s;
    z-index: 9999;
}
.active {
    transform: translateX(246px);
}
</style>
<style >
div.van-nav-bar__title,
.van-nav-bar__right {
    color: #fff;
}
</style>