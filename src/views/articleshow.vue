<template>
    <div :style="{backgroundImage: 'url(' + picture + ')', backgroundSize:'contain', }" class="all">
        <div class="articleTitle" ref="articleTitle" style="opacity: 1.0">
            <div class="line1">
                <span class="message" v-text="title"></span>
            </div>
            <div class="line">
                <div class="line2" v-text="'作者:'+actor">
                    </div>
                    <div class="line3"  v-text="type == 0?'技术':'资讯'">
                    </div>
                    <div class="line4" v-text="date">
                    </div>
                </div>
            </div> 
        <div class="articleInfo" style="opacity: 1.0">
            <span class="message" v-html="content">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articleshow",
        theme: "snow",
        boundary: document.body,
        data() {
            return {
                title: '',
                content: "",
                actor: "",
                type: 0,
                picture: "",
                date: ""
            }
        },
        created: function () {
            this.getQuerys();
        },
        watch: {
            //监测路由变化，只要变化了就调用路由参数方法将数据存储本组件即可
            '$route': 'getQuerys',
        },
        methods: {
            getQuerys: function () {
                //取得路由带过来的参数
                this.title = this.$route.query.title;
                this.content = this.$route.query.content;
                //将数据放在当前组件的数据内
                this.actor = this.$route.query.actor;
                this.picture = this.$route.query.picture;
                this.date = this.$route.query.date;
            },
        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }

    html {
        height: 100%;
    }
    .all {
     
        position: relative;
        height: 2500px
    }
    .articleTitle {
        width: 70%;    
        margin: 0 auto;
        padding-top:25px;
        padding-bottom: 60px;
        background-color: powderblue ;
        opacity: 1.0
    }
    .line1 {
        font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        height: 80px
    }
    line {
        width: 1500px;
        padding-left: 130px;
        padding-top: 200px
    }
    .line2{
        float:left;
        padding-left:150px;
        line-height:1em;
        color: black;
        font:20px/25px Georgia, "Times New Roman", Times, serif;
    }
    .line3 {
        display:block;
        float: left;
        flex: 6;
        color: black;
        font:20px/25px Georgia, "Times New Roman", Times, serif; text-decoration:none;
        padding-left:800px
    }
    .line4 {
        display: flex;
        float: left;
        flex: 2;
        color: black;
        font:20px/25px Georgia, "Times New Roman", Times, serif; text-decoration:none;
        padding-left:10px

    }

    .articleInfo {
        width: 70%;
        margin: 0 auto;
        background-color:aliceblue;
        bottom: 0;
        color:black;
        opacity: 1.0;
        height:2000px
    }

    .buttons {
    }
</style>