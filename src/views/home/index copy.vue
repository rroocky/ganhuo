<template>
    <div class="home">
        <div id="imgbox" :class="{ active: menuShow }">
            <vue-waterfall-easy
                :imgsArr="imgsArr"
                :height="imgboxHeight"
                @scrollReachBottom="getData"
            >
            
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
// vue-waterfull-easy
import vueWaterfallEasy from "vue-waterfall-easy";
import homeApi from "@/api/home";
export default {
    name: "Home",
    data() {
        return {
            //图片页码
            page: 1,
            //图片数量
            count: 10,
            // 图片数组
            imgsArr: []
        };
    },
    computed: {
        //图片容器的高度：屏幕-顶部header
        imgboxHeight() {
            let clientHeight = window.innerHeight;
            let navHeight = 46;
            return clientHeight - navHeight;
        },
        // 导航显示/隐藏状态
        menuShow() {
            return this.$store.state.status.menuShow;
        }
    },
    created() {
        // 发送请求获取图片
        this.fetchData();
    },
    components: {
        vueWaterfallEasy
    },
    methods: {
        fetchData() {
            homeApi
                .getData(this.page, this.count)
                .then(res => {
                    let data = "";
                    let arr = [];
                    if (res.status == 200) {
                        data = res.data.data;
                        for (let key in data) {
                            arr.push({ src: data[key].url });
                            // console.log(data[key]);
                            // 图片数组增量更新
                        }
                        this.imgsArr = this.imgsArr.concat(arr);
                        // 页码加一
                        this.page++;
                    }
                })
                .catch(msg => console.log(msg));
        },
        // 瀑布流触底触发事件
        getData() {
            this.fetchData();
        }
    }
};
</script>
<style lang="scss" scoped>
#imgbox {
    padding-top: 46px;
    transition: 0.3s;
}
.active {
    transform: translateX(246px);
}
</style>
