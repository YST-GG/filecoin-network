<template>
    <div class="box">
        <el-scrollbar style="height:100%;width:100%">
            <div style="width:200px;height:1000px;background-color:rgba(0, 0, 0, 0.2);float:left;margin-left:20px;">
                <el-dropdown @command="handleCommand">
                    <el-button size="medium">
                        区块链资讯分类<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :value="技术"
                                          ref="type"
                                          command="0"
                                          @click.native="handleSelectva">技术</el-dropdown-item>
                        <el-dropdown-item :value="资讯"
                                          command="1"
                                          @click.native="selectcval">资讯</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div style="margin-left:300px;width:1000px;margin-top:20px;height:1600px;background-color:rgba(0, 0, 0, 0.2);position:inherit"
                 class="mybox">
                <div style="width:100%;height:20px">
                    <span style="font-size:30px;display:block;margin-left:100px;color:white;font-family:Times New Roman,Georgia,Serif">区块链资讯列表</span>
                </div>
                <!-- margin-bottom:24px; -->
                <div style="padding-top:20px;margin-left:40px"
                     v-for="(item, index) in articlelist"
                     :key="index">
                    <div class="article-item-warp" data-v-571310f4="" v-show="showaArticlelist">
                        <div style="width:250px;height:90px;float:left">
                            <img style="width:200px; height:110px" :src="item.picture" @click="goItem(item)" />
                        </div>
                        <div style="width:800px;height:130px;background-color:rgba(0, 0, 0, 0.2);border-radius: 8px;">
                            <span style="color:white;margin-top:10px;font-size:20px" @click="goItem(item)">{{ item.title }}</span>
                            <span style="color:greenyellow;margin-top:5px;font-size:20px" @click="goItem(item)">
                                {{
                item.content.substring(0, 5) + "......"
                                }}
                            </span>
                            <span style="        font-size: 15px;
        color: InfoBackground;
" @click="goItem(item)">作者:{{ "" + item.actor }}</span>
                            <span v-if="item.type == '0'" style="font-size:6px;color:lightblue;padding-top:10px">
                                类别:<font style="font-size:13px;color:white">技术</font>\时间:{{ item.date }}
                            </span>
                            <span v-else style="color:lightblue;font-size:6px;padding-top:10px">类别:<font style="font-size:13px;color:white">资讯</font> 时间:{{ item.date }}</span>
                            <span style=""
                                  class="bbt-dot"
                                  style="font-size:1px;color:green"
                                  data-v-571310f4="">
                            </span>
                        </div>
                    </div>
                </div>
                <div style="height:240px;padding-top:10px;margin-left:300px">
                    <tr>
                        <td colspan="5">
                            <ul class="ul" style="">
                                <li class="disabled" v-if="pageindex == 1">
                                    <a href="javascript:;">上一页</a>
                                </li>

                                <li v-else v-on:click="LoadData(pageindex - 1)">
                                    <a href="javascript:;">上一页</a>
                                </li>
                                <!--页码-->
                                <li>
                                    <a href="#" v-text="n"></a>
                                </li>
                                <!--下一页-->
                                <li class="disabled"
                                    v-if="pageindex == totalpages || totalpages == 0">
                                    <a href="javascript:;">下一页</a>
                                </li>

                                <li v-else v-on:click="LoadData(pageindex + 1)">
                                    <a href="javascript:;">下一页</a>
                                </li>

                                <li>
                                    <span style="color:black">第{{ pageindex }}/{{ totalpages }}页</span>
                                </li>
                                <li>
                                    <span style="color:black">共{{ articletotalCount }}条</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
    import {
        acquireArticle,
        getOneArticle,
        acquireArticlebytype
    } from "../http/http";
    import { scrollbar, Dialog, Upload, Image, Form } from "element-ui";
    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ font: [] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"]
    ];
    export default {
        name: "article",
        theme: "snow",
        boundary: document.body,
        modules: {
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ["clean"],
                ["link", "image", "video"]
            ]
        },
        placeholder: "Insert text here ...",
        readOnly: false,
        iniect: ["reload"], //注入reload方法
        data() {
            return {
                dialogVisible: false,
                radio: "1",
                articlelistData: [],
                title: "",
                actor: "",
                filter: {
                    type: 0
                },
                options: [
                    { value: "选项1", id: 1, code: "xuanxiang1", label: "技术" },
                    { value: "选项2", id: 2, code: "xuanxiang2", label: "资讯" }
                ],
                value: "",
                //show: true,
                type: "",
                filter: {
                    type: 0
                },
                id: "",
                value: "",
                articleactor: "",
                url: "",
                pic: "",
                articletotalCount: "",
                totalpages: 1, //总页数
                pagesize: 10, //一页显示10条
                pageindex: 1, //当前页
                articlelist: [],
                showaArticlelist: true,
                fits: ["contain"],
                imageUrl: "",
                addbutton: false,
                editbutton: false,
                picture: "",
                fileList: [],
                handlers: {
                    image: function (value) {
                        if (value) {
                        } else {
                            this.quill.format("image", false);
                        }
                    }
                },
                editorOption: {
                    theme: "snow",
                    //modules: {
                    //   imageDrop: true
                    // },
                    modules: {
                        imageDrop: true,
                        history: {
                            delay: 1000,
                            maxStack: 50,
                            userOnly: false
                        },
                        toolbar: {
                            container: toolbarOptions,
                            handlers: {
                                image: function (value) {
                                    if (value) {
                                        //     console.log(document.querySelector("#uploadImg .el-upload"));
                                        document.querySelector("#uploadImg .el-upload").click();
                                        //   console.log(value, 1231);
                                    } else {
                                        this.quill.format("image", false);
                                    }
                                }
                            }
                        },
                        imageResize: {
                            displayStyles: {
                                backgroundColor: "black",
                                border: "none",
                                color: "white"
                            },
                            modules: ["Resize", "Display", "Toolbar"]
                        }
                    }
                },
                technology: "",
                filter_options: [
                    { text: "技术", value: 0 },
                    { text: "资讯", value: 1 }
                ],
                listQuery: {
                    curPage: 1,
                    pageSize: 10,
                    page: 1,
                    type: "",
                },
                //默认显示第几页
                articlecurrentPage: 1,
                articlepageSizes: [5, 10, 15, 20],
                articlePageSize: 10,
                type: "",
                selectVal: this.value || "",
                machinetype: "",
                showaddbutton: false,
                showeditbutton: false,
                articleid: "",
                content: "",
                date: "",
                articletype: "",
                buttonval: "",
                nowDate: "",
                filename: "",
                radiova: "",
                articleId: "",
                dialogType: "",
                picture: "",
                Pictformat: "",
                technologyval: "",
                titleMap: {
                    addArticle: "新增文章",
                    editArticle: "编辑文章"
                },
                dialogStatus: ""
            };
        },
        mounted() {
            this.acquireArticle();
            this.formatterDate();
            this.goItem();
            this.getValue();
            this.confirm();
            this.handleSelectva();
            this.GenerateImage();
            this.beforeAvatarUpload();
            this.handleAvatarSuccess();
            this.getFile();
            this.getBase64();
            this.handleSizeChange();
            this.handleCurrentChange();
            this.cancel();
            this.LoadData();
            this.checktitle();
            this.checkactor();
            this.change();
            this.currentSel();
            this.handleCommand();
            this.acquireArticlebytype();
        },
        methods: {
            handleCommand(command) {
                let articletype = command;
                sessionStorage.setItem("articletype ", articletype);
                let type = parseInt(articletype);
                let arttype = { type: type };
                acquireArticlebytype(arttype)
                    .then(resp => {
                        //    console.log(resp.data);
                        let articletypeData = resp.data;
                        let { msg, code, user } = resp.data;
                        if (code == 0) {
                            this.$message({
                                message: "查询文章成功",
                                type: "success"
                            });
                        }
                        this.articlelist = resp.data.data;
                        this.reload();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },


            change(technology) {
                this.technologyval = technology;
                alert(this.technologyval);
            },
            currentSel(selVal) {
                this.code = selVal.code;
                this.name = selVal.label;
                alert(selVal.code);
                //    console.log("选择的name为：" + this.name, "选择的code为:" + this.code);
                //  console.log(selVal);
            },
            articlecalculate() {
                let articleCount = this.articletotalCount;
                if (articleCount % 10 == 0) {
                }
            },
            handleSizeChange(page) {
                this.articlePageSize = page;
                this.articlecurrentPage = 1;
            },
            handleCurrentChange(curpage) {
                this.articlecurrentPage = curpage;
            },
            getArticletype(data) {
                alert(data);
            },
            confirm() {
                this.title = "";
                this.content = "";
                this.actor = "";
                this.imageUrl = true;
                this.radio = "";
                this.dialogVisible = false;
            },
            cancel() {
                this.title = "";
                this.content = "";
                this.actor = "";
                this.imageUrl = true;
                this.radio = "";
                this.dialogVisible = false;
            },

            AddText: function (event) { },
            getValue() {
                let radio = this.radio;
            },
            onEditorBlur() { },
            onEditorFocus() { },
            onEditorChange() { },
            handleClose(done) {
                this.$confirm("确认关闭?")
                    .then(_ => {
                        location.reload();
                    })
                    .catch(_ => { });
            },
            filterChange(filters) {
                if (filters != null) {
                    alert(filters.machinetype);
                }
            },
            handleSelectva(value) {
                //    alert(value);
            },
            formatterDate(nowDate) {
                if (!nowDate) {
                    return "";
                }
                var year = nowDate.getFullYear();
                var month = nowDate.getMonth() + 1;
                var day = nowDate.getDate();
                if (month < 10) {
                    month = "0" + month;
                }
                if (day < 10) {
                    day = "0" + day;
                }
                var date = year + "-" + month + "-" + day;
                return date;
            },
            goItem(item) {
                let id = item.id + "";
                let editjson = { id: id };
                getOneArticle(editjson).then(res => {
                    this.$router.replace({
                        path: '/show', query: {
                            title: res.data.data.title,
                            actor: res.data.data.actor,
                            type: res.data.data.type,
                            picture: res.data.data.picture,
                            content: res.data.data.content,
                            date: res.data.data.date,
                        }
                    })

                }).catch(err => {
                    console.log(err);
                });
            },
            GenerateImage(picture) {
                var byteCharacters = window.atob(
                    this.picture.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
                );
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var blob = new Blob([byteArray], {
                    type: undefined
                });
            },
            acquireArticle() {
                acquireArticle()
                    .then(respose => {
                        let articlelistData = JSON.stringify(respose.data);
                        let articleData = articlelistData.data;
                        this.articlelistData = eval("(" + articlelistData + ")");
                        //        console.log(articlelistData);
                        this.articletotalCount = respose.data.data.length;
                        this.totalpages = Math.ceil(
                            (this.articletotalCount * 1) / this.pagesize
                        );
                        this.LoadData(1); //加载第一页数据
                        //         console.log(respose.data.data.length);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },

            LoadData(value) {
                this.pageindex = value;
                this.articlelist = this.articlelistData.data.slice(
                    (this.pageindex - 1) * 10,
                    this.pageindex * 10
                );
            },

            getFile(file, fileList) {
                //    console.log(file);
                this.getBase64(file.raw).then(res => {
                    let Pictformat = res;
                    this.Pictformat = Pictformat;
                    //        console.log(this.Pictformat);
                });
            },

            getBase64(file) {
                return new Promise(function (resolve, reject) {
                    let reader = new FileReader();
                    let imgResult = "";
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        imgResult = reader.result;
                    };
                    reader.onerror = function (error) {
                        reject(error);
                    };
                    reader.onloadend = function () {
                        resolve(imgResult);
                    };
                });
            },

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                let quill = this.$refs.myQuillEditor.quill;
                alert(quill + "aaaaa");
                let length = quill.getSelection().index;
                quill.insertEmbed(length, "image", this.Pictformat);
                quill.setSelection(length + 1);
            },
            beforeAvatarUpload(file) {
                const isJPG =
                    file.type === "image/jpeg" ||
                    "image/png" ||
                    "image/gif" ||
                    "image/jpg" ||
                    "image/jpeg";
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error("上传头像图片只能是jepg,jpg,png,gif,jpeg 格式!");
                }
                if (!isLt2M) {
                    this.$message.error("上传头像图片大小不能超过 2MB!");
                }
                return isJPG && isLt2M;
            },

            handleRemove(file, fileList) {
                //        console.log(file, fileList);
            },
            //点击文件列表中已经上传的文件
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                //      console.log("file.url" + file.url);
                this.dialogVisible = true;
            },
            //上传图片成功将图片插入富文本编辑器
            handleSuccess(response, file, fileList) {
                // this.imageUrl = URL.createObjectURL(file.raw);
                //   alert(imageUrl);
                //let quill = this.$refs.myQuillEditor.quill;
                // alert(quill + "aaaaa");
                /*if (response) {
                  alert(response);
                  let length = quill.getSelection().index;
                  quill.insertEmbed(length, "image", response.data.url);
                  quill.setSelection(length + 1);
                } else {
                  alert("图片插入失败");
                }*/
            }
        },
        created() { }
    };
</script>
.activated{
　　　　display:none;
　　}
<style lang="scss" scoped>
    @import "../style/comon0.css";

    body {
        padding: 0px;
        margin: 0px;
        color: #fff;
        font-family: "微软雅黑";
    }

    .box {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .el-scrollbar__wrap {
        overflow: scroll;
        width: 110%;
        height: 100%;
    }

    .article-item {
        float: left;
    }

    .filter-tool {
        margin: 30px;
        background: rgba(0, 0, 0, 0.2);
        .handlers

    {
        padding: 10px;
    }

    }

    .article-item-warp {
        height: 100px;
        width: 800px;
        margin-left: 40px;
        padding-bottom: 12%;
        border-radius: 8px;
        transition: all 0.3s ease;
        border: 1px solid gainsboro;
        margin-top: 20px;
        //margin-top:15px;
    }

    .article-item__thumb {
        // height: 100px;
        padding-top: 20px;
        padding-left: 15px;
    }

    .bbt-block {
        color: #5c5c5c;
    }

    span {
        display: block;
        // margin-top:10px;
    }

    .active {
        background: #2d8cf0;
    }

        .active a {
            color: grey !important;
        }

    .ul {
        list-style: none;
        margin: 20px;
    }

        .ul li {
            float: left;
            line-height: 28px;
            width: 50px;
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 30px;
            text-align: center;
            margin: 5px;
        }

            .ul li.disabled {
                color: #333;
            }

            .ul li a {
                color: #333;
            }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

        .avatar-uploader .el-upload:hover {
            border-color: #409eff;
        }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .article-item__body {
        //height:160px;
        width: 700px;
        float: right;
        padding-left: 10px;
        padding-top: 40px;
        height: 100px;
    }

    .font-bold bbt-block span {
        font-family: grey;
    }

    .el-table,
    .el-table__expanded-cell {
        background-color: rgba(0, 0, 0, 0.2);
    }

        .el-table > > > th,
        .el-table > > > tr {
            background-color: rgba(0, 0, 0, 0.2);
        }

            .el-table > > > td,
            .el-table > > > th.is-leaf {
                border-bottom: none;
            }

    .el-pagination > > > .btn-next,
    .el-pagination > > > .btn-prev {
        background: none !important;
    }
</style>