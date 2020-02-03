<template>
    <div>
        <div style="display:flex;justify-content:center;margin-top:150px">
            <el-card style="width:600px;height:400px">
                <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
                    <div style="margin-top:5px"></div>
                    <el-form-item label="用户名" prop="name">
                        <el-col :span="22">
                            <el-input type="text" v-model="loginForm.name" placeholder="请输入用户名"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-col :span="22">
                            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                        </el-col>
                    </el-form-item>
                    <center>
                        <el-form-item>
                            <el-button type="primary" style="width:300px" class="loginBtn" @click.native.prevent="handleSubmit">登录</el-button></br>
                            <el-button type="primary" style="margin-top:15px;width:300px" @click="toHome">前台</el-button>
                        </el-form-item>
                    </center>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script>
    import NavBar from "../components/header.vue";
    import { NavMenu } from "element-ui";
    import echarts from "echarts";
    import "echarts-gl";
    import { BaiduMap, BmScale, BmGeolocation } from "vue-baidu-map";
    import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";
    import axios from "axios";
    import { ManagerLogin } from "../http/http";
    import { Toast, Dialog } from "vant";
    export default {
        data() {
            return {
                loginForm: {
                    name: "",
                    password: ""
                },
                userData: {},
                loginFormRules: {
                    name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                }
            };
        },
        methods: {
            handleSubmit(ev) {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.logining = true;
                        var name = this.loginForm.name;
                        var password = this.loginForm.password;
                        let user = { name: name, password: password };
                        //let param =this.$qs.stringify(loginParams);
                        ManagerLogin({ name, password }).then(res => {
                            //   console.log({ name, password });
                            // console.log(res);
                            this.logining = false;
                            let { msg, code, user } = res.data;
                            if (code == 0) {
                                this.$message({
                                    message: "登录成功",
                                    type: "success"
                                });
                                sessionStorage.setItem("user", user);
                                const redirect = this.$route.query.redirect;
                                if (redirect) {
                                    this.$router.push(redirect);
                                } else {
                                    //否则就跳到默认的首页
                                    this.$router.push({ path: "/article" });
                                }
                            } else {
                            }
                        });
                    } else {
                        console.log("请重新输入!!");
                        return false;
                    }
                });
            },
            toHome() {
                this.$router.push({ path: "/Home" });
            }
        },

        mounted() {
            this.handleSubmit();
        },
        created() { }
    };
</script>

<style lang="scss" scoped>

    @import "../style/comon0.css";

    body {
        padding: 0px;
        margin: 0px;
        color: #fff;
        font-family: "微软雅黑";
    }
</style>