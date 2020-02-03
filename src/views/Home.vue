<template>
 <el-col :span="3"> <div class="home" style="position:fixed;left:0;width:100%;height:100%">
  <div style="position:fixed;width:560px;float:left;">
    <el-col :span="4" class="elgutter">
    <div style="height:160px;width:530px">
      <div class="panel-container">
      <div class="block" style="padding-top:10px">
       <span style="font-size:18px">提示块</span>
         <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown"style="font-size:20px;display:block;text-align:center;padding-top:30px">118</span>
      </div>
      </div>
         

      <div class="bar"> 
        <div class="block">
          <span style="font-size:18px">平均价格</span>
           <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown"style="font-size:20px;display:block;text-align:center;padding-top:30px">0.54</span>
          <div>
          </div>
          </div> 
      </div>
     </div>
     <div>
      <div>

    <div style="height:160px;width:530px;padding-top:15px;padding-left:10px">
     <div class="price">
     <div class="panel-height-helper">
     <div class="panel-wrapper">
     <div class="panel-height-helper">
      <div class="panel-header grid-drag-handle">
         <span class="panel-title">
            <span class="icon-gf panel-alert-icon"></span>
            <span class="panel-title-text"><font style="vertical-align: inherit;">
            <font class="height" style="display:block;text-align:center;font-size:18px">网络存储</font></font></span>
             <span class="panel-menu-container dropdown">
            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown"style="font-size:20px;display:block;text-align:center;padding-top:30px">120TB</span>
           <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
              </span>
              </span>
    </div>
    </div>
    </div>
  </div>
   </div>

      <div class="blockHeight">
      <div class="panel-height-helper" ref="panel">
      <div class="panel-wrapper">
     <div class="panel-height-helper">
      <div class="panel-header grid-drag-handle">
         <span class="panel-title">
            <span class="icon-gf panel-alert-icon"></span>
            <span class="panel-title-text"><font style="vertical-align: inherit;">
            <font class="height" style="display:block;text-align:center;font-size:18px">块高</font></font></span>
             <span class="panel-menu-container dropdown">
            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">8602</span>
           <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
              </span>
              </span>
         </div>
        </div>
       </div>
      </div>
      </div>
       </div>

      <div style="height:160px;width:530px;padding-top:15px;padding-left:10px">
      <div class="blockTime">
      <div class="panel-height-helper" ref="panel"><div class="panel-wrapper">
     <div class="panel-height-helper">
      <div class="panel-header grid-drag-handle">
         <span class="panel-title">
            <span class="icon-gf panel-alert-icon"></span>
            <span class="panel-title-text"><font style="vertical-align: inherit;">
            <font class="height" style="display:block;text-align:center;font-size:18px">平均区块时间</font></font></span>
             <span class="panel-menu-container dropdown">
            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown"style="font-size:20px;display:block;text-align:center;padding-top:30px">40S</span>
           <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
              </span>
              </span>
         </div>
        </div>
       </div>
      </div>
      </div>

      <div class="pledgecollteral">
      <div class="panel-height-helper" ref="panel">
      <div class="panel-wrapper">
     <div class="panel-height-helper">
      <div class="panel-header grid-drag-handle">
         <span class="panel-title">
            <span class="icon-gf panel-alert-icon"></span>
            <span class="panel-title-text"><font style="vertical-align: inherit;">
            <font class="height" style="display:block;text-align:center;font-size:18px">质押抵押品</font></font></span>
             <span class="panel-menu-container dropdown">
            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:20px">1FIL</span>
           <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
              </span>
              </span>
         </div>
        </div>
       </div>
      </div>
      </div>
    </div>

    <div style="height:160px;width:530px;padding-top:15px;padding-left:10px">
      <div class="LastblockTime">
      <div class="panel-height-helper" ref="panel">
      <div class="panel-wrapper">
     <div class="panel-height-helper">
      <div class="panel-header grid-drag-handle">
         <span class="panel-title">
            <span class="icon-gf panel-alert-icon"></span>
            <span class="panel-title-text"><font style="vertical-align: inherit;">
            <font class="height" style="display:block;text-align:center;font-size:18px">最后区块时间</font></font></span>
             <span class="panel-menu-container dropdown">
            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">2min</span>
           <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
              </span>
              </span>
         </div>
        </div>
       </div>
      </div>
      </div>

    </div>
    </div>  
     </div>
    </el-col>
    </div>

    <div class="bg" style="width:520px;margin-left:560px;text-align:center;position:absolute">
      <div style="width:480px;height:420px" id="mainCanvas" ref="changedArea""></div>
         <div style="width:400px;height:180px">  
      <div style="width:420px;height:180px">  
      <el-table :data="tableData" style="width:420px"  @filter-change="filterChange" :default-sort="{prop: 'height', order: 'descending'}" >
      <el-table-column align="center" prop="machineID" label="机器IP" ></el-table-column>
      <el-table-column  align="center" :column-key="'machinetype'"  label="机器配置"  :filters="[{text:'CPU', value: 'CPU'},{text: 'GPU', value: 'GPU'},{text: 'MHM', value: 'MHM'}]" :filter-multiple="false"  prop="machinetype" >
       </el-table-column>
        <el-table-column  align="center" width="200px" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="onChangeClick(scope.$index,scope.row)">{{start}}</el-button>
        <el-button size="mini" type="primary" @click="">删除</el-button>
      </template>
     </el-table-column>
     </el-table>
      </div>
       </div> 
    </div>

    <div style="width:460px;float:right">
      <div style="width:450px;height:180px">  
      <el-table :data="tableData"  style="width:450px" :default-sort="{prop: 'height', order: 'descending'}" >
      <el-table-column align="center" prop="machineID" label="矿工ID" ></el-table-column>
       <el-table-column align="center" prop="balance" label="余额" sortable show-overflow-tooltip></el-table-column>
       <el-table-column align="center" prop="posttime" label="挖矿时间" sortable show-overflow-tooltip></el-table-column>
      </el-table-column>
       <el-table-column
       fixed="right"
      label="操作" align="center"
      width="100">
      <template slot-scope="scope">
        <el-button @click="" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
     </el-table>
      </div>

       
        <div id="chartLineBox" ref="chart"style="width:400px;height:230px;margin-top:30px"></div> 

         <div id="chartLineBoxs" ref="charts"style="width:400px;height:240px"></div>

   </div>
  </div>
  </el-col>
</template>
<script>
import NavBar from '../components/header.vue'
import {getMinerdata} from "../http/http";
import { NavMenu } from "element-ui";
import echarts from "echarts";
import "echarts-gl";
import { BaiduMap, BmScale, BmGeolocation } from 'vue-baidu-map';
import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
import axios from 'axios';
import { Toast,Dialog} from 'vant';
export default {
  props: {
    zoom: {
      type: Number,
      default: 2
    },
    Longitude: {
      type: Number,
     default: 116.400244,//北京经度
    },
    latitude: {
      type: Number,
      default: 39.92556,//北京维度
    }
  },
  name: "Map",
  data() {
    return {
      start:"启动",
        state: [
        { text:'已启动',value: 0},
        { text:'启动',value: 1},
        { text:'停止',value: 2}
      ],
       filter_options:[
        {text:'CPU', value: 0},{text: 'GPU', value:1},{text: 'MHM', value:2}
        ],
       listQuery: {
        curPage: 1,
        pageSize: 10,
        page: 1,
        type:'',
       },
        type:'',
        machinetype:'',
         chartLine: '',
          chartline:'',
            /*  opinion: ["1", "3", "3", "4", "5"],*/
    opinionData: ["1", "3", "3", "4", "5"],
      tableData: [{
            machineID: '001',  
            machinetype:'CPU',
            address:'上海市静安区平型关路',
            balance: '100',
            posttime:'2020-2-18',
            sealtime:'20104-4-29',
          }, {
            machineID: '002',
            machinetype:'GPU',
            address: '上海市浦东新区益江路',
            balance: '200',
            posttime:'2020-2-19',
            sealtime:'2020-4-25',
             }, {
            machineID:'003',
            machinetype:'MHM',
            address: '上海市杨浦区',
            balance: '200',
            posttime:'2020-2-19',
            sealtime:'2020-4-25',
          }],
      sphere:'',
      camera:'',
      scene:'',
      renderer:'',
      chartline:'',
      earthImg:'',
      earthBallSize:'',
      earth_geometry :'',
      earthTexture :'',
       geometry:'',
       material:'', 
       mesh:'',
       group:'',
       container:'',
       globeMesh:'',
       texture:'',
       globeMaterial:'',
      earth_material:'',
      boxwidth:'',
      boxheight:'',
      
      rotationSpeed: 0.02,
       controls: {
        rotationSpeed:0.02,
        bouncingSpeed:0.03
        },
        sphere: '',
        cube: '',
        step: 0,
        active:'',
      chart: echarts.ECharts,
      bmap: {},
      linesSeries: [],
      scatterSeries: [],
      effectScatterSeries: [],
      map: '',
      point: null,
      comp: {},
      myChart: "",
      mapStyle: {
        styleJson: [
          {
  
            elementType: "geometry",
            stylers: {
              hue: "#007fff",
              saturation: 89
            }
          }
        ]
      },
      option: {
        // 需要注意的是我们不能跟 grid 一样省略 grid3D
        grid3D: {},
        // 默认情况下, x, y, z 分别是从 0 到 1 的数值轴
        xAxis3D:{},
        yAxis3D:{},
        zAxis3D:{},
         globe: {
          heightTexture: "./assets/images/world.jpg",
          show: true,
          shading: "color",
          //视角控制：
          viewControl:{
            //projection:"orthographic",
            rotateSensitivity: 0,//鼠标旋转灵敏度
            zoomSensitivity: 0, //鼠标缩放灵敏度
            autoRotate: true, //地球是否自传
            autoRotateAfterStill:0.001, //鼠标停止后多久恢复旋转(为0时暂停后不恢复旋转)
            //alpha:160,//视角绕 x 轴，即上下旋转的角度
            //beta:-20,//视角绕 y 轴，即左右旋转的角度。
            targetCoord: [116.46,39.92] //定位到哪里
          },
        },
        series: [
          {
            type: "map3D",
            map: "china",
            //绘制完整尺寸的 echarts实例
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
            boundingCoords: [[-180, 90], [180, -90]],
            label: {
              textStyle: {
                color: "#fff",
                fontSize: 50
              }
            },
            emphasis: {
              itemStyle: {
                color: "#2038cc"
              }
            }
          }
        ]
      },
      asyncData: "",
      data: {
        mining: {
          blocksInTipset: Number
        },
        nodes: Array,
        storage: {
          storageCost: {
            average: Number
          },
          storageAmount: {
            trend: Number
          },
          networkUtilization: {
            amount: Number
          }
        }
      },
      isAddTrend:false,
      isReduceTrend:false,
      isAddAmountTrend:false,
      isReduceAmountTrend:false,
      isReduceNetWorkTrend:false,
      isAddNetWorkTrend:false
    };
  },
  created() {
    
  },
  mounted() {
    this.init();
    this.filterChange();
    this.getminerdata();
     this.chartline = echarts.init(this.$refs.chart);
      // 指定图表的配置项和数据
        var option = {
            tooltip: { //设置tip提示
              trigger: 'axis'
      },
          legend: {//设置区分（哪条线属于什么）
        data:['','']
            },
      color: ['#8AE09F', '#FA6F53'], //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {//设置x轴
        type: 'category',
      boundaryGap: false,   //坐标轴两边不留白
       data: ['2020-1-1', '2020-2-1', '2020-3-1', '2020-4-1', '2020-5-1', '2020-6-1','2020-7-1','2020-8-1'],
      name:'时间', //X轴 name
          nameTextStyle: { //坐标轴名称的文字样式
              color: '#FA6F53',
                    fontSize: 16,
                    padding: [0, 0, 0, 20]
                },
                axisLine: {//坐标轴轴线相关设置。
                    lineStyle: {
                        color: '#FA6F53',
                    }
                }
            },
            yAxis: {
                name: 'Time between tipsets',
                nameTextStyle: {
                    color: '#FA6F53',
                    fontSize: 16,
                    padding: [0, 0, 10, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#FA6F53',
                    }
                },
                type: 'value'
            },
            series: [
              {
                name: 'Block Time',
                data:  [220, 232, 201, 234, 290, 230, 220,240],
                type: 'line', // 类型为折线图
                lineStyle: {// 线条样式 =>必须使用normal属性
                    normal: {
                      color: '#8AE09F',
                    }
                },
              },
              {
                name: 'Null Blocks',
                data: [0, 0, 0, 0, 0, 0, 0,0],
                type: 'line',
                lineStyle: {
                    normal: {
                        color: '#FA6F53',
                    }
                },
              }
          ]
        };
    // 使用刚指定的配置项和数据显示图表。
        this.chartline.setOption(option);
    this.myChart = echarts.init(this.$refs.charts);
       this.myChart.setOption(option = {
        title: {
            text: 'chain Height'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
           data: ['2020-1-1', '2020-2-1', '2020-3-1', '2020-4-1', '2020-5-1', '2020-6-1'],
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            left: 'center',
            feature: {
              
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series:{
            name: 'chain Height',
            type: 'line',
            data:['0','100','200','300','400','500'],
            markLine: {
                silent: true,
                data: [{
                    yAxis:50
                }, {
                    yAxis:100
                }, {
                    yAxis:150
                }, {
                    yAxis:200
                }, {
                    yAxis:300
                }]
            }
        }
    }); 
    
  },
  methods:{
    	 init(){
       let containerRotation=this.$refs.changedArea;
        let controllerRotation = new GIO.Controller(containerRotation );
        controllerRotation.setAutoRotation(true,1);
        controllerRotation.setTransparentBackground(true);
        controllerRotation.setSurfaceColor("#23A4FF");
        controllerRotation.lightenMentioned(true); 
        controllerRotation.configure({
          color: {
                in:0xff0000,
                out:0x00ff00
          }
             });
         controllerRotation.showInOnly(true);
        controllerRotation.adjustOceanBrightness(1);
        controllerRotation.adjustRelatedBrightness(1);
        controllerRotation.lightenMentioned(true);
        controllerRotation.adjustMentionedBrightness(1);
           controllerRotation.setExportColor("#FEF504");
           controllerRotation.setImportColor("#00FF00");
           controllerRotation.addData(data);
           controllerRotation.init(); 
			},
       mouseOver: function(){
            this.active = 'background-color: #cccccc';
        },
      mouseLeave: function () {
            this.active = '';
        }, 
       filterChange(filters){
        if(filters!=null){
         this.listQuery.type =filters.machinetype;
          alert(filters.machinetype);
         }
          //this.getTableInfo();// 通过接口获取数据的方法
        },
     onChangeClick(index,row){
       row.index = index;
        this.$alert('确定要启动机器吗?',{
          confirmButtonText:'确定',
          callback: action =>{
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
            this.start="已启动";
          }
        });    
    },
     
     async getminerdata(){  
      let res=await getMinerdata();  
          alert(res);
      },
    baiduMap() {
         //初始化
      this.map =new BMapGL.Map(this.$refs.earths,{minZoom:4,maxZoom:4}); 
      this.point = new BMapGL.Point(this.lng, this.lat);//设置中心点
      this.map.centerAndZoom(this.point);// 初始化地图,设置中心点坐标和地图显示比例级别
      this.map.setMapType(BMAP_EARTH_MAP);//设置地图类型为地球模式
       this.map.disableScrollWheelZoom();//禁止缩放
       this.map.disableDoubleClickZoom();//禁止双击缩放
      this.map.disableDragging(); //禁止拖拽
       //this.map.setCurrentCity("北京");
    },
     //设置标记
    setLabel(){
      let marker = new BMapGL.Marker(this.point);   //创建标记
      this.map.addOverlay(marker); //将标记加入地图上
      let label = new BMapGL.Label(`城市:${this.comp.city},径度:${this.lng},纬度:${this.lat}`, 
        {offset: new BMapGL.Size(20, -10)}
      );
      marker.setLabel(label);     //将标记标注
    },
    changeMapStyle() {
      var mapStyle = {
        features: ["road", "building", "water","land"], //隐藏地图上的"poi",
        style: "googlelite"
      };
      map.setMapStyle(mapStyle);
    },
    getInfoTime() {
      setInterval(() => {
        getInfo().then(res => {
          this.data = res.data.data;
          const response = res.data.data;
          this.data.mining.power = res.data.data.mining.power.toFixed(3) * 100;
          this.data.mining.averageBlockTime = res.data.data.mining.averageBlockTime.toFixed(
            1
          );
          const diff = new Date().getTime() - response.mining.lastBlockTime;
          this.data.mining.lastBlockTime =
            (diff / 100000000000).toFixed(2) + "s";
          this.data.storage.storageCost.average = response.storage.storageCost.average.substr(
            0,
            4
          );
          if (this.data.storage.storageCost.trend < 0) {
            this.isAddTrend = false;
            this.isReduceTrend = true;
          } else if (this.data.storage.storageCost.trend > 0) {
            this.isAddTrend = true;
            this.isReduceTrend = false;
          } else {
            this.isAddTrend = false;
            this.isReduceTrend = false;
          }
          this.data.storage.storageCost.trend =
            (response.storage.storageCost.trend * 100).toFixed(1) + "%";
          if (this.data.storage.storageAmount.trend < 0) {
            this.isAddAmountTrend = false;
            this.isReduceAmountTrend = true;
          } else if (this.data.storage.storageAmount.trend > 0) {
            this.isAddAmountTrend = true;
            this.isReduceAmountTrend = false;
          } else {
            this.isAddAmountTrend = false;
            this.isReduceAmountTrend = false;
          }
          this.data.storage.storageAmount.trend =
            (response.storage.storageAmount.trend * 100).toFixed(1) + "%";
          this.data.storage.networkUtilization.amount =
            (
              Number(
                response.storage.networkUtilization[
                  response.storage.networkUtilization.length - 1
                ].amount
              ) * 100
            ).toFixed(1) + "%";
        });
      }, 10000);
    }
  }
};
</script>
<style>
.el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: rgba(141, 214, 217, .4)!important;
}
 .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color:antiquewhite; 
  color: #fff;
 }
 .el-select-dropdown__item hover{
    background-color:bisque;
 }
 
.el-select-dropdown__list{
  background-color:aqua !important;
}
.el-table-filter__list{
  background-color :aqua !important;
}
.el-table_header{
  text-align: center !important;
}
.el-table--fit {
    background-color:rgba(0,0,0,0.2) !import;
}
</style>
<style lang="scss" scoped>
@import "../style/comon0.css";
.panel-container {
    background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position:relative;
    border-radius: 4px;
    margin-left:10px;
    height:150px;
    width:250px;
    dispaly:block;
    float:left;
}
.bar{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius:4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:right;
}

.price{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:left;
}
.blockHeight{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:right;
}

.blockTime{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:left;
}

.pledgecollteral{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position:relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:right;
}
.LastblockTime{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:left;
}
.pledgecollateral{
   background-color:rgba(141, 214, 217, 0.4);
    border: 1px solid #141414;
    position: relative;
    border-radius: 4px;
    height:150px;
    width:250px; 
    dispaly:block;
    float:right;
}
.height{
  padding-top:10px;
}
.block{
  text-align:center;
}
.el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0.2);
}
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(360deg);
  transition: all 5s;
}

</style>

