<template>
<center>
  <div class="about" style="position:fixed;left:0;width:100%;height:100%">
    <el-table :data="tableData" header-row-class-name="tableHead" :class="tableRowClassName" style="width:70%" :default-sort="{prop: 'height', order: 'descending'}" >
      <el-table-column align="center" prop="machineID" label="机器IP" sortable show-overflow-tooltip></el-table-column>
      <el-table-column  align="center" label="机器配置" :filter-multiple="false":column-key="'workID'":filters="[{text:'CPU', value: 'CPU'},{text: 'GPU', value: 'GPU'},{text: 'MHM', value: 'MHM'}]" prop="workID" >
      </el-table-column>
       <el-table-column align="center" prop="workID" label="矿工ID"></el-table-column>
      <el-table-column  align="center"  prop="address"  label="矿工地址" min-width="180" sortable show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="balance" label="余额" sortable show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="posttime" label="挖矿时间" sortable show-overflow-tooltip></el-table-column>
       <el-table-column  align="center" width="200px" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">启动</el-button>
        <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
     </el-table-column>
     </el-table>
     <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40,50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
      <div id="chartLineBox" ref="chart"style="height:360px;width:640px"></div>
  </div>
</center>  
</template>
<script>
import NavBar from '../components/header.vue'
import {NavMenu} from "element-ui";
import echarts from 'echarts';
import 'echarts-gl';
export default {
  props: ["childData"],
  data(){
    return {
          chartLine: '',
          chartline:'',
            /*  opinion: ["1", "3", "3", "4", "5"],*/
    opinionData: ["1", "3", "3", "4", "5"],
 tableData: [{
            machineID: '001',  
            workID:'1',
            address: '上海市静安区平型关路',
            balance: '100',
            posttime:'2020-2-18',
            sealtime:'20104-4-29',
          }, {
            machineID: '002',
            workID:'2',
            address: '上海市浦东新区益江路',
            balance: '200',
            posttime:'2020-2-19',
            sealtime:'2020-4-25',
          }, {
            machineID: '003',
            workID:'3',
            address: '上海市杨浦区桂林路',
            balance: '300',
            posttime:'2020-2-20',
            sealtime:'2020-4-28',
          }, {
            machineID: '004',
            workID:'4',
            address: '上海市闸北区',
            balance: '400',
            posttime:'2020-2-21',
            sealtime:'2020-4-20',
          }],
          // 默认显示第一条
          currentPage:1
    };
  },
 mounted(){
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
      name: '时间',           //X轴 name
          nameTextStyle: { //坐标轴名称的文字样式
              color: '#FA6F53',
                    fontSize: 16,
                    padding: [0, 0, 0, 20]
                },
                axisLine: { //坐标轴轴线相关设置。
                    lineStyle: {
                      color: '#FA6F53',
                    }
                }
            },
            yAxis: {
                name: '收益',
                nameTextStyle: {
                    color: '#FA6F53',
                    fontSize: 16,
                    padding: [0,0,10,0]
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
                name: '挖矿收益',
                data:  [220, 232, 201, 234, 290, 230, 220,240],
                type: 'line', // 类型为折线图
                lineStyle: {// 线条样式 =>必须使用normal属性
                    normal: {
                      color: '#8AE09F',
                    }
                },
              },
              {
                name: '平均收益',
                data: [120, 200, 150, 80, 70, 110, 130,115],
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
  },
  methods: {
     tableRowClassName({col,colIndex}) {
        let color = "";
          color='warning-row';
       },
    async getInfo() {
      const res = await getInfo();
      const response = res.data.data;
      this.nodesList = response.nodes;
    },
    getInfoUpdate() {
      setInterval(() => {
        this.getInfo();
      }, 10000);
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    }
  },
  created() {
    this.getInfo();
    this.getInfoUpdate();
  }
};
</script>
<style>
body {
    padding: 0px;
    margin: 0px;
    color: #fff;
    font-family: "微软雅黑";
}
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

</style>
<style scoped>
.el-table,
.el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0.2);
}
.el-table >>> th,
.el-table >>> tr {
  background-color: rgba(0, 0, 0, 0.2);
}
.el-table >>> td,
.el-table >>> th.is-leaf {
  border-bottom: none;
}
.el-pagination >>> .btn-next,
.el-pagination >>> .btn-prev {
  background: none !important;
}
</style>
