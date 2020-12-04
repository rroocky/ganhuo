import Vue from "vue";
import Vuex from "vuex";
// 导航菜单列表
import { MENU_LIST } from '@/common/MENU_LIST'

Vue.use(Vuex);

// app 启动时 的初始状态
const status = {
    headerTitle: "首页福利",
    menus: MENU_LIST,
    menuShow: false,
    loadingshow: true
}

export default new Vuex.Store({
    state: {
        status
    },
    mutations: {
        // 更改导航显示/隐藏状态
        UPDATE_MENU_SHOW(state) {
            state.status.menuShow = !state.status.menuShow;
        },
        // 更新header title
        updateTitle(state, newTitle) {
            state.status.headerTitle = newTitle;
        }
    },
    actions: {},
    modules: {}
});
