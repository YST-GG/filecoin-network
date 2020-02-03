<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <i class="head_goback" v-if="goBack" @click="onTapBack">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </i>

        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <router-link  :to="getRoute()"    v-show="emiter && emiter.showRight" class="head_login" tag="div" >
            <div class="login_span"  @click="onTapRight"  >
                <img v-if="emiter && emiter.rightIcon"  class="message" :src="getImage(emiter.rightIcon)">
                <span  v-if="emiter && emiter.rightText"  class="link">{{emiter.rightText}}</span>
            </div>
            <i  v-if="emiter && emiter.notify > 0"  class="count">{{emiter.notify}}</i>
        </router-link>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>

         
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{
              navigator:null,
            }
        },
        mounted(){
            //  console.log("getUserInfo");
            //获取用户信息
           // this.getUserInfo();

        },
        props: ['signinUp', 'headTitle', 'goBack', 'emiter'],
        computed: {

        },
        /**
         emiter{
             beforeBack(e),
             onTapRight(e),
             rightRoute,
             rightText,
             showRight,
         }
          
         */
        methods: {
            onTapBack(e){
                let emiter = this.emiter;
                if ( emiter && emiter.beforeBack){
                    if (!emiter.beforeBack(e)){
                        return ;
                    }
                }
               this.$router.go(-1)     
            },
            onTapRight(e){
                let emiter = this.emiter;
                if ( emiter && emiter.onTapRight){
                    if (!emiter.onTapRight(e)){
                        return ;
                    }
                }
            },
            getImage(imageName){
	            return this.imageAsset.getImage(imageName);
            },
            getRoute(){
                if (this.emiter && this.emiter.rightRoute){
                    return this.emiter.rightRoute;
                }
                return "";
            },
          //监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据
          async listenPropChange(){

           // this.Tracer.log(this + "=>listenPropChange:"+ this.emiter)
            //this.navigator = this.emiter;

          },
        },
      watch: {

        //监听父级传来的参数，当值发生变化的时候重新获取数据
        emiter: function (value){
         // this.Tracer.log( "emiter:" , value);
          this.listenPropChange();
        }

      }


    }

</script>

<style lang="scss" scoped>
</style>