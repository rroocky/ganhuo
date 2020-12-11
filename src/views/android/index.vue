<template>
    <div class="home">
        <div id="imgbox" :class="{ active: menuShow }">
            <vue-waterfall-easy
                :imgsArr="imgsArr"
                :height="imgboxHeight"
                @scrollReachBottom="getData"
                :isRouterLink="true"
                linkRange="img"
            >
                <div slot-scope="props">
                    <!-- props.index 组件绑定数组的下标 -->
                    <!-- <p class="some-info">picture index: {{ props.index }}</p> -->
                    <!-- props.value 组件绑定数组的数组元素 -->
                    <item-info :prop="props.value"></item-info>
                </div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
// 每个item的描述组件
import ItemInfo from "@/components/ItemInfo";
// vue-waterfull-easy
import vueWaterfallEasy from "vue-waterfall-easy";
import androidApi from "@/api/android";
export default {
    name: "Dayly",
    data() {
        return {
            page: 1,
            // 请求数量
            count: 10,
            // 图片数组
            imgsArr: [],
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
        },
    },
    created() {
        // 发送请求获取图片
        this.fetchData();
    },
    components: {
        vueWaterfallEasy,
        ItemInfo
    },
    methods: {
        fetchData() {
            androidApi
                .getData(this.page, this.count)
                .then((res) => {
                    let data = "";
                    let arr = [];
                    if (res.status == 200) {
                        data = res.data.data;
                        for (let key in data) {
                            let timeStr = data[key].createdAt;
                            arr.push({
                                src: data[key].images,
                                // 配置跳转链接
                                href: `/android/article/${data[key]._id}`,
                                info: {
                                    desc: data[key].desc,
                                    likes: data[key].likeCounts,
                                    views: data[key].views,
                                    time: timeStr.split(" ")[0],
                                },
                            });
                        }
                        this.imgsArr = this.imgsArr.concat(arr);
                        // 页码加一
                        this.page++;
                    }
                })
                .catch((msg) => console.log(msg));
        },
        // 瀑布流触底触发事件
        getData() {
            //request.get(this.imgsArr.href).then(data=>console.log(data))
            this.fetchData();
        },
    },
};
</script>
<style lang="scss" scoped>
#imgbox {
    transition: 0.3s;
}
.active {
    transform: translateX(246px);
}
.img-info {
    p {
        margin: 0;
    }
    .desc {
        font-size: 12px;
        color: #656161;
        line-height: 1.25;
        padding: 10px;
    }
    .info {
        padding: 5px;
        .col {
            padding-left: 5px;
        }
    }
    .time {
        padding: 5px 10px;
        font-size: 12.5px;
        color: #656161;
    }
}
</style>
