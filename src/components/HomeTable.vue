<template>
  <div>
      <el-table :data="tableData" style="width:400px" :default-sort="{prop: 'height', order: 'descending'}" >
      <el-table-column align="center" prop="machineID" label="机器IP" sortable show-overflow-tooltip></el-table-column>
      <el-table-column  align="center" label="机器配置"  prop="workID" >
      </el-table-column>
       <el-table-column align="center" prop="workID" label="矿工ID"></el-table-column>
     </el-table>
    <el-pagination
      style="text-align:center"
      layout="prev, pager, next, total"
      :page-sizes="[10]"
      :page-size="pagesize"
      :total="nodesList.length"
      :current-page="currpage"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getInfo } from "../http/http";
export default {
  props: ["childData"],
  data() {
    return {
       tableData: [{
            machineID: '001',  
            workID:'1',
            address:'上海市静安区平型关路',
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
          }],
      nodesList: [],
      pagesize: 10,
      currpage: 1
    };
  },
  methods: {
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
    background-color: rgba(0,0,0,0.2) !import;
}
.el-table{
   background-color: initial !important;
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