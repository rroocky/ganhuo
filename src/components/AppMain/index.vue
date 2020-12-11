<template>
    <div>
        <div class="main" :style="{ height: mainHeight + 'px' }">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainHeight: window.screen.availHeight - 46,
        };
    },
    watch: {
        mainHeight() {
            return window.screen.availHeight - 46;
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    transition:  0.3s;
    overflow: auto;
    padding-top: 46px;
}
</style>