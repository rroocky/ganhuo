<template>
    <div>
        <div id="article">
            <img :src="img" alt="" class="banner" />
            <item-info :prop="prop"></item-info>
            <!-- markdown -->
            <div id="markdow">
                <mavon-editor
                    v-model="markdown"
                    :ishljs="true"
                    defaultOpen="preview"
                    :editable="false"
                    :toolbarsFlag="false"
                    :shortCut="false"
                    :subfield="false"
                />
            </div>
            <div class="comments-box">
                <div class="bar">
                    <van-icon name="chat-o" size="30" />
                    全部评论
                </div>
                <ul>
                    <li v-for="item in comments" :key="item.userId">
                        <div class="userAvatar">
                            <img :src="item.headUrl" alt="" />
                            {{ item.userName }}
                        </div>
                        <div class="comments">{{ item.comment }}</div>
                        <div class="com-bottom">
                            <div class="fl">
                                {{ item.createdAt | timeFormate }}
                            </div>
                            <div class="fr">
                                <van-icon
                                    name="thumb-circle-o"
                                    size="25"
                                    :color="item.dz ? 'red' : '#ccc'"
                                    class="dz"
                                    @click="dzHandle(item)"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";

import TecArticles from "@/api/tech_article";
import ItemInfo from "@/components/ItemInfo";
export default {
    components: {
        ItemInfo,
    },
    data() {
        return {
            // 顶部大图
            img: "",
            // 评论
            comments: [],
            // 点赞浏览量等信息
            prop: {
                info: {
                    likes: null,
                    views: null,
                    desc: null,
                    time: null,
                },
            },
            // 技术文章主体nn
            markdown: "",
        };
    },
    created() {
        this.fetchData();
        this.getComments();
    },
    filters: {
        timeFormate(time) {
            return time.split(" ")[0];
        },
    },
    methods: {
        fetchData() {
            TecArticles.getDataById(this.$route.params.id)
                .then((response) => {
                    if (response.status == 200) {
                        // 请求成功
                        let data = response.data.data;
                        this.img = data.images[0];
                        this.prop.info.likes = data.likeCounts;
                        this.prop.info.desc = data.desc;
                        this.prop.info.time = data.createdAt.split(" ")[0];
                        this.prop.info.views = data.views;
                        this.markdown = data.markdown;
                    }
                })
                .catch((err) => console.log(err));
        },
        getComments() {
            TecArticles.getCommentsById(this.$route.params.id).then(
                (response) => {
                    let com = response.data.data;
                    com.forEach((element) => {
                        element = JSON.parse(element);
                        element.dz = false;
                        this.comments.push(element);
                    });
                }
            );
        },
        // 点赞处理
        dzHandle(item) {
            item.dz = !item.dz;
            if (item.dz) {
                Toast({
                    message: "点赞加1！",
                    icon: "like-o",
                });
            } else {
                Toast({
                    message: "取消点赞！",
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
#article {
    .banner {
        width: 95%;
        display: block;
        margin: 0 auto;
    }
    .comments-box {
        padding: 10px 20px;
        .bar {
            font-size: 16px;
            color: #a1a1a1;
            margin: 15px 0 10px 0;
            i {
                vertical-align: -5px;
            }
        }
        .userAvatar {
            font-size: 16px;
            font-weight: bold;
            img {
                width: 45px;
                border-radius: 50%;
                vertical-align: -15px;
            }
        }
        .comments {
            font-size: 16px;
            line-height: 1.5;
            padding-left: 50px;
            margin: 15px 0;
        }
        .com-bottom {
            font-size: 14px;
            color: #a1a1a1;
            padding-left: 50px;
            overflow: hidden;
            height: 30px;
            line-height: 30px;
            .dz {
                margin-right: 50px;
            }
        }
    }
    #markdow {
        margin: 10px;
        box-shadow: 0 0 2px #ccc;
        padding: 10px;
    }
}
.fl {
    float: left;
}
.fr {
    float: right;
}
</style>