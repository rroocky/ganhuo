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
                <div class="img-info" slot-scope="props">
                    <!-- props.index 组件绑定数组的下标 -->
                    <!-- <p class="some-info">picture index: {{ props.index }}</p> -->
                    <!-- props.value 组件绑定数组的数组元素 -->
                    <p class="desc">{{ props.value.info.desc }}</p>
                    <p class="info">
                        <van-row>
                            <van-col span="6" class="col">
                                <van-badge
                                    :content="props.value.info.likes"
                                    max="99"
                                    color="#1989fa"
                                >
                                    <van-icon name="star-o" size="24" />
                                </van-badge>
                            </van-col>
                            <van-col span="6" class="col">
                                <van-badge
                                    :content="props.value.info.views"
                                    max="99"
                                    color="#1989fa"
                                >
                                    <van-icon name="eye-o" size="24" />
                                </van-badge>
                            </van-col>
                        </van-row>
                    </p>
                    <p class="time">
                        {{ props.value.info.time }}
                    </p>
                </div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
// vue-waterfull-easy
import vueWaterfallEasy from "vue-waterfall-easy";
import daylyApi from "@/api/dayly";
export default {
    name: "Dayly",
    data() {
        return {
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
    },
    methods: {
        fetchData() {
            daylyApi
                .getData(this.count)
                .then((res) => {
                    let data = "";
                    let arr = [];
                    if (res.status == 200) {
                        data = res.data.data;
                        console.log(res);
                        for (let key in data) {
                            let timeStr = data[key].createdAt;
                            arr.push({
                                src: data[key].url,
                                // 配置跳转链接
                                href: `/dayly/${data[key]._id}`,
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
                        this.count += this.count;
                    }
                })
                .catch((msg) => console.log(msg));
        },
        // 瀑布流触底触发事件
        getData() {
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
