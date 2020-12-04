<template>
    <div>
        <van-nav-bar
            :title="status.headerTitle"
            fixed
            :class="['navbar', { active: status.menuShow }]"
        >
            <template #right>
                <van-icon name="search" size="20" color="#fff" />
            </template>
            <template #left>
                <van-icon
                    name="wap-nav"
                    size="20"
                    color="#fff"
                    @click="openAsideNavBar"
                />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: this.$store.state.status
        };
    },
    methods: {
        //打开侧边导航栏,传递激活状态的class,同时给header也添加激活状态的class
        openAsideNavBar() {
            this.$store.commit("UPDATE_MENU_SHOW");
        }
    }
};
</script>

<style lang="scss" scoped>
div.navbar {
    background-color: #2196f3;
    transition: 0.3s;
}
.active {
    transform: translateX(246px);
}
</style>
<style >
div.van-nav-bar__title {
    color: #fff;
}
</style>