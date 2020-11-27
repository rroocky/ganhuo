<template>
    <div>
        <van-nav-bar
            title="标题"
            fixed
            :class="[$style.navbar, { active: status }]"
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
    //layout 传来的侧边导航栏的状态
    props: ["status"],
    methods: {
        //打开侧边导航栏,传递激活状态的class,同时给header也添加激活状态的class
        openAsideNavBar() {
            this.$emit("openAsideNavBar");
        }
    }
};
</script>

<style lang="scss" module>
div.navbar {
    background-color: #2196f3;
}
</style>
<style >
div.van-nav-bar__title {
    color: #fff;
}
</style>