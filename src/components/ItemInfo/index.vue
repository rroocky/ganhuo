<template>
    <div>
        <div class="img-info">
            <!-- props.index 组件绑定数组的下标 -->
            <!-- <p class="some-info">picture index: {{ props.index }}</p> -->
            <!-- props.value 组件绑定数组的数组元素 -->
            <p class="desc">{{ prop.info.desc }}</p>
            <p class="info">
                <van-row>
                    <van-col span="6" class="col">
                        <van-badge
                            :content="prop.info.likes"
                            max="99"
                            color="#1989fa"
                        >
                            <van-icon name="star-o" size="24" />
                        </van-badge>
                    </van-col>
                    <van-col span="6" class="col">
                        <van-badge
                            :content="prop.info.views"
                            max="99"
                            color="#1989fa"
                        >
                            <van-icon name="eye-o" size="24" />
                        </van-badge>
                    </van-col> 
                </van-row>
            </p>
            <p class="time">
                {{ prop.info.time }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["prop"],
    
};
</script>

<style lang="scss" scoped>
.img-info {
    p {
        margin: 0;
    }
    .desc {
        font-size: 14px;
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