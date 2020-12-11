<template>
    <div>
        <div id="menu" :class="{ active: menuShow }">
            <div class="userImage">
                <van-image
                    round
                    width="100px"
                    height="100px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <div class="userName">将军膀</div>
            </div>
            <ul class="nav">
                <li v-for="item in menus" :key="item.id">
                    <router-link
                        :to="'/' + item.text"
                        active-class="active-link"
                    >
                        <div @click="navHandle(navArr[item.text].name)">
                            <div class="icon">
                                <van-icon :name="navArr[item.text].icon" />
                            </div>
                            {{ navArr[item.text].name }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
const navArr = {
    home: { name: "首页福利", icon: "gem" },
    dayly: { name: "每日推荐", icon: "hot" },
    android: { name: "android", icon: "graphic" },
    ios: { name: "ios", icon: "graphic" },
    flutter: { name: "Flutter", icon: "graphic" },
};

export default {
    data() {
        return {
            status: this.$store.state.status,
            navArr,
        };
    },
    computed: {
        menus() {
            return this.status.menus;
        },
        menuShow() {
            return this.status.menuShow;
        },
    },
    methods: {
        // 导航的点击事件
        navHandle(newTitle) {
            // 更新headertitle
            this.$store.commit("updateTitle", newTitle);
            // 关闭导航
            this.$store.commit("UPDATE_MENU_SHOW");
        },
    },
};
</script>

<style lang="scss" scoped>
#menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -246px;
    width: 246px;
    background-color: #2c3e50;
    transition: 0.3s;
    z-index: 99999;
    .userImage {
        text-align: center;
        padding: 15px 0;
    }
    .userName {
        color: #fff;
        font-size: 14px;
        padding-top: 5px;
    }
    .nav {
        li {
            padding: 20px 10px;
            font-size: 16px;
            color: #ddd;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 40px;
            .icon {
                position: absolute;
                left: 15px;
                top: 22px;
            }
        }
    }
}
a,
a:link {
    color: inherit;
}
.active-link {
    color: #2196f3;
}
#menu.active {
    transform: translateX(246px);
}
.navActive {
    background: red;
}
</style>