<template>
  <div id="app">
    <div id="nav">
      <div style="padding-top:15px;vertical-align:middle" class="backTo" v-show="isShow">
         <el-button icon="el-icon-arrow-left" v-on:click="back">返回</el-button>
         </div>
    <div style="padding-top:15px">
        <el-col :span="8" class="head-btns">
          <el-button  plain><router-link  to="/about">挖矿</router-link></el-button>
         <el-button  plain><router-link  to="/article">文章</router-link></el-button>
        </el-col>
    </div>
      <el-col :span="12" class="title"><span style="font-size:24px;font-weight:700;color: #fff">耘存科技FILECOIN实时数据</span></el-col>
    </div>
    <router-view />
  </div>
</template>
  <script>
export default {
		data(){
			return {
        isShow:false,
				transitionName: "fade",
				title: "首页",
				headerShow: true,
				navShow: true
			};
		},
		components: {
		},
		mounted() {
			this.headerShow = this.$route.meta.showHeader !=undefined ? this.$route.meta.showHeader : true;
			this.navShow = this.$route.meta.showNav !=undefined ? this.$route.meta.showNav : true;
			this.title = this.$route.meta.title !=undefined ? this.$route.meta.title : '';
			let a = document.getElementById('box-wrapper');
			if(a != undefined){
				document.body.removeChild(a);
			}
			
			/*
			let app = document.getElementById('app');
			let path = app.getAttribute('rewritePath');
			let autoUser =this.getAutoLoginUser();

			env.start({rewritePath:path, autoUser:autoUser});
			*/
		},
		// 基于路线变化的动态设置路由切换动画
		watch: {
			$route(to,from) {
			if(to.path=="/home"){
        this.isShow=false;
     } else{
         this.isShow=true;
			 }
		},
    },
		methods: {
       back(){
        this.$router.go(-1);//返回上一层
        }	
			},
		}	
  </Script>
<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  background: url("./assets/images/bg1.png") no-repeat center center;
   background-size: 100% 100%;
}
#nav {
  height: 80px;
  background: url("./assets/images/head_bg.png") no-repeat center cen   ter;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
}
</style>
<style lang="scss" scoped>
.router-btn {
  background: url("./assets/images/bnt.png") no-repeat;
  width: 91px;
  height: 35px;
  border: none;
  font-size: 14px;
  text-decoration: none;
  line-height: 35px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.head-btns{
  display: flex;
  justify-content: space-around;
}
.title{
  color: #fff;
  line-height: 35px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
 .el-button {
 background-color: initial !important;

}
 
</style>
