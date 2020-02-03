<template>
    <div class="about" style="position:fixed;left:0;width:150%;height:100%">
        <div style="height:360px;width:100%;position:relative">
            <div style="height:20px;margin-left:10px">
                <el-button size="mini"
                           @click="handleAdd">添加</el-button>
            </div><!--:style="'width:'+screenWidth+'px;'"-->
            <div id="showmachine" margin-top="20px" style="width:auto">
                <el-table show-summary
                          :summary-method="getSummaries"
                          header-row-class-name="tableHead"
                          @filter-change="filterChange"
                          :class="tableRowClassName"
                          style="width:100%"
                          :default-sort="{ prop: 'height', order: 'descending' }">
                    <el-table-column align="center"
                                     prop="ip"
                                     label="ip"
                                     width="10%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="id"
                                     label="机器编号"
                                     width="5%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="nodeId"
                                     label="节点编号"
                                     show-overflow-tooltip
                                     width="30%"></el-table-column>
                    <el-table-column align="center"
                                     prop="nodeName"
                                     label="节点名称"
                                     width="5%"></el-table-column>
                    <el-table-column align="center"
                                     prop="money"
                                     label="余额"
                                     width="5%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="height"
                                     label="区块高度"
                                     width="5%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="gpu"
                                     label="gpu"
                                     width="10%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="cpu"
                                     label="cpu"
                                     width="2%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="mem"
                                     label="mem"
                                     width="10%"
                                     sortable
                                     show-overflow-tooltip></el-table-column>
                    <el-table-column align="center"
                                     prop="sectorSize"
                                     label="算力"
                                     width="8%"
                                     sortable
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column align="center"
                                     prop="provenStorage"
                                     label="验证存储"
                                     sortable
                                     show-overflow-tooltip
                                     width="10%"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                        </template>
                    </el-table-column>
                </el-table>
                <div style="height:120px;padding-top:10px;text-align:center">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page="currentPage"
                                   :page-sizes="[10,20,30,40,50]"
                                   :page-size="10"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="machinetotalCount">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div style="height:560px;width:100%;position:relative">
            <div style="height:420px;width:600px;margin-left:30px;display:inline-block;text-align:center">
            </div>
            <el-dialog title="添加"
                       :visible.sync="dialogVisible"
                       width="30%"
                       :before-close="handleClose">
                <el-form label-width="160px">
                    <el-form-item label="cpu" prop="cpu">
                        <el-input v-model="CPU"
                                  placeholder="请输入cpu"></el-input>
                    </el-form-item>
                    <el-form-item label="gpu" prop="gpu">
                        <el-input v-model="GPU"
                                  placeholder="请输入gpu"></el-input>
                    </el-form-item>
                    <el-form-item label="height" prop="height">
                        <el-input v-model="height"
                                  placeholder="请输入区块高度"></el-input>
                    </el-form-item>
                    <el-form-item label="id" prop="id">
                        <el-input v-model="id"
                                  placeholder="请输入编号"></el-input>
                    </el-form-item>
                    <el-form-item label="ip" prop="ip">
                        <el-input v-model="ip"
                                  placeholder="请输入机器ip"></el-input>
                    </el-form-item>
                    <el-form-item label="mem" prop="mem">
                        <el-input v-model="mem"
                                  placeholder="请输入mem"></el-input>
                    </el-form-item>
                    <el-form-item label="money" prop="money">
                        <el-input v-model="money"
                                  placeholder="请输入money"></el-input>
                    </el-form-item>
                    <el-form-item label="nodeId" prop="nodeId">
                        <el-input v-model="nodeId"
                                  placeholder="请输入节点编号"></el-input>
                    </el-form-item>
                    <el-form-item label="nodeName" prop="nodeName">
                        <el-input v-model="nodeName"
                                  placeholder="请输入节点名称"></el-input>
                    </el-form-item>
                    <el-form-item label="provenStorage" prop="provenStorage">
                        <el-input v-model="provenStorage"
                                  placeholder="请输入存储证明"></el-input>
                    </el-form-item>
                    <el-form-item label="sectorSize" prop="sectorSize">
                        <el-input v-model="sectorSize"
                                  ref="actor"
                                  placeholder="请输入算力"></el-input>
                    </el-form-item>
                    <div style="width:240px;height:60px;margin:0 auto">
                        <el-radio-group v-model="radio" @change="getValue()">
                        </el-radio-group>
                    </div>
                </el-form>
                <el-button size="mini"
                           style="margin-top:20px;width:60px"
                           @click="addMachine()">添加</el-button>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>

        </div>
    </div>
    </div>
</template>
<script>
    import NavBar from "../components/header.vue";
    import { NavMenu } from "element-ui";
    import { getloaclmachineData } from "../http/http";
    import echarts from "echarts";
    import moment from "moment";
    import "echarts-gl";
    export default {
        props: ["childData"],
        watch: {
            screenWidth(val)  {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.timer = false
                    }, 400)
                }
                //document.getElementById('showmachine').style.width = this.screenWidth - 260 + 'px';
            }

        },
        data() {
            return {
                screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                sectorSizeall: 0.0,
                powerdata: [],
                randomData: [],
                mychart: null,
                columns: "",
                machinedata: [],
                filter_options: [
                    { text: "CPU", value: 0 },
                    { text: "GPU", value: 1 },
                    { text: "MHM", value: 2 }
                ],
                type: "",
                cpu: "",
                gpu: "",
                height: "",
                id: "",
                ip: "",
                mem: "",
                money: "",
                nodeId: "",
                nodeName: "",
                provenStorage: "",
                sectorSize: "",
                sectorSizeva: "",
                machinetype: "",
                chartLine: "",
                chartline: "",
                mychart: "",
                sectorSizeval: "",
                sectorSize: "",
                dialogVisible: false,
                opinionData: ["1", "3", "3", "4", "5"],
                currentPage: 1,
                getSummaries: param => {
                    const { columns, data } = param;
                    const sums = [];
                    columns.forEach((column, index) => {
                        if (index == 0) {
                            sums[index] = "合计";
                            return;
                        }
                        if (index == 1) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 2) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 3) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 5) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 6) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 7) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 8) {
                            sums[index] = "-";
                            return;
                        }
                        if (index == 10) {
                            sums[index] = "-";
                            return;
                        }
                        if (column.property == "sectorSize") {
                            const values1 = data.map(item => item[column.property]);
                            sums[9] = values1.reduce((prev, curr) => {
                                curr = parseFloat(curr.substring(0, curr.length - 2));
                                const value = Number(curr);
                                let sectorSizeval = value;
                                sessionStorage.setItem("sectorSizeval", sectorSizeval);
                                if (!isNaN(value)) {
                                    return prev + curr;
                                } else {
                                    return prev;
                                }
                            }, 0);
                        }

                        if (column.property == "money") {
                            const values = data.map(item => Number(item[column.property]));
                            sums[4] = values.reduce((prev, curr) => {
                                const value = Number(curr);
                                if (!isNaN(value)) {
                                    return prev + curr;
                                } else {
                                    return prev;
                                }
                            }, 0);
                            // sums[index]
                        }
                    });
                    this.sums = sums;
                    return sums;
                }

                // 默认显示第一条,
                /*sectorSizetotal: (row, column) => {
                  //  alert(this.sectorSizeall);+
                  //  this.sectorSizeall =
                  //    this.sectorSizeall +
                  //   parseFloat(row.sectorSize.substring(0, row.sectorSize.length - 2));
                  //alert("asdasd");
                  //  alert(this.sectorSizeall);
                  /*if (sectorSize == undefined) {
                    return "";
                  }
                  let sectorSizeva = 0.0;
                  if (sectorSizeval != null) {
                    sectorSizeva = parseFloat(sectorSize) / 100000000.0;
                  }
                  //return sectorSizeva;
                  //写上formatter函数
                  //let payStatus = orderState(value, column); //这里可以调用写好的函数也可以直接处理数据
                  //  return "";
                }*/
            };
        },
        mounted() {
            // const that = this;
          //  window.addEventListener('resize', function () {
          //      this.screenWidth = document.body.offsetWidth;
          //  });
            this.get_bodyHeight();
            //alert(this.screenWidth);
          //  document.getElementById('showmachine').style.width = this.screenWidth - 260 + 'px';
            this.handleAdd();
            this.getloaclmachineData();
            this.addMachine();
            this.timeInterval();
            // 使用刚指定的配置项和数据显示图表.
            this.mychart = echarts.init(this.$refs.mychart);
            var data = [];
            let sectorSizeval = sessionStorage.getItem("sectorSizeval");
            this.sectorSizeval = sectorSizeval;
            let nowdata = Date.parse(new Date());
            //获取当前时间戳
            for (let i = 0; i < 24; i++) {
                let randomData = this.sectorSizeval; //获取总算力
                let times = nowdata - i * 30 * 60 * 1000;
                data.unshift([times, randomData]);
            }
            var option = {
                title: {
                    text: "total power",
                    subtext: "",
                    textStyle: {
                        color: "#ccc",
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "normal"
                    },
                    left: "center"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        animation: false,
                        label: {
                            backgroundColor: "#ccc",
                            borderColor: "#aaa",
                            borderWidth: 1,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            color: "#222"
                        }
                    }
                },
                xAxis: {
                    type: "time",
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    splitLine: {
                        show: false,
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ["blue"]
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                            width: 1 //这里是x坐标轴的宽度
                        }
                    },
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return (
                            date.getDate() +
                            "-" +
                            (date.getMonth() + 1) +
                            "-" +
                            date.getFullYear() +
                            " : " +
                            date.getHours() +
                            ":" +
                            date.getMinutes() +
                            date.getSeconds() +
                            ":" +
                            params.value[1]
                        );
                    }
                },

                yAxis: {
                    boundaryGap: [0, "100%"],
                    splitLine: {
                        show: false
                    },
                    type: "value",
                    axisLabel: { formatter: "{value} TB" },
                    // y轴的颜色和宽度
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                            width: 1 //这里是y坐标轴的宽度
                        }
                    }
                },
                toolbox: {
                    left: "center",
                    feature: {}
                },
                series: {
                    name: "chain.power",
                    type: "line",
                    data: data,
                    markLine: {
                        silent: true,
                        data: [
                            {
                                yAxis: 20
                            },
                            {
                                yAxis: 30
                            },
                            {
                                yAxis: 40
                            },
                            {
                                yAxis: 50
                            },
                            {
                                yAxis: 60
                            }
                        ]
                    },
                    rich: {
                        title: {
                            color: "#eee",
                            align: "center"
                        }
                    }
                }
            };
            this.mychart.setOption(option);
            if (this.timer) {
                clearInterval(this.timer);
            } else {
                this.timer = setInterval(() => {
                    this.timer;
                    console.log("1S刷新一次数据");
                }, 1000);
            }
        },
        destroyed() {
            clearInterval(this.timer);
        },
        computed: {},
        watch: {
            value: {
                option: function (newVal, oldVal) {
                    if (this.mychart) {
                        if (newVal) {
                            this.setOption(newVal);
                        } else {
                            this.setOption(oldVal);
                        }
                    } else {
                        this.init();
                    }
                },
                deep: true
            },
            sectorSizeval: {
                handler: function (newVal, oldVal) {
                //    console.log("oldVal:", oldVal);
                  //  console.log("newVal:", newVal);
                    //console.log(newVal);
                    this.$set(this.sectorSizeval, newVal);
                },
                deep: true
            }
        },
        methods: {
            tableRowClassName({ col, colIndex }) {
                let color = "";
                color = "warning-row";
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
            },
            sectorSizeData() {
                let nowdata = new Date();
                let dates = moment(nowdata).format("YYYY-MM-DD HH:mm:ss");
                let value = value + this.sectorSizeval;
                return {
                    name: now.toString(),
                    value: [
                        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
                        value
                    ]
                };
            },
            handleAdd() {
                this.dialogVisible = true;
            },
            addMachine() {
                this.dialogVisible = true;
                let cpu = this.cpu;
                let gpu = this.gpu;
                let height = this.height;
                let id = this.id;
                let ip = this.ip;
                let mem = this.mem;
                let money = this.money;
                let nodeId = this.nodeId;
                let nodeName = this.nodeName;
                let provenStorage = this.provenStorage;
                let sectorSize = this.sectorSize;
                let machinejson = {
                    cpu: cpu,
                    gpu: gpu,
                    height: height,
                    id: id,
                    ip: ip,
                    mem: mem,
                    money: money,
                    nodeId: nodeId,
                    nodeName: nodeName,
                    provenStorage: provenStorage,
                    sectorSize: sectorSize
                };
                getloaclmachineData(machinejson)
                    .then(resp => {
                   //     console.log(resp.data);
                        let { msg, code, user } = resp.data;
                        if (code == 0) {
                            this.$message({
                                message: "添加机器成功",
                                type: "success"
                            });
                        }
                        this.acquireArticle();
                        this.reload();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            randomData(val) {
                now = new Date(+now + 60 * 1000);
                value = value + Math.random() * 21 - 10;
                var valueName =
                    now.getFullYear() +
                    "/" +
                    (now.getMonth() + 1) +
                    "/" +
                    now.getDate() +
                    " " +
                    (now.getHours() >= 10 ? now.getHours() : "0" + now.getHours()) +
                    ":" +
                    (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes());
                //+ ':' + (now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds())
                return {
                    name: now.toString(),
                    value: [valueName, Math.round(value)]
                };
            },

            //得到屏幕的宽度
            get_bodyHeight() {//动态获取浏览器高度
                const that = this
                window.onresize = () => {
                    return (() => {
                        window.screenWidth = window.innerWidth + 'px' || (document.documentElement.clientWidth + 'px') || (document.body.clientWidth + 'px');
                        that.screenWidth = window.screenWidth
                    })()
                }
            },
            getSummaries(param) {
             //   console.log(param);
                var { columns, data } = param;
               // console.log(param);
                var sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = "总计";
                        return;
                    }
                    switch (column.property) {
                        case "sectorSize":
                            sums[index] = this.machinedata.data + " TiB";
                            break;
                        case "height":
                            sums[index] = this.machinedata.data;
                            break;
                        default:
                            break;
                    }
                });

                return sums;
            },
            acquiremjachineData() {
                acquiremjachineData()
                    .then(response => {
                        // let machinedata = JSON.stringify(response.data);
                        //let machtypeinedata = machinedata.data;
                        /*let sectorSizeva = 0.0;
                        if (machinedata.data.sectorSize != null) {
                          sectorSizeva =
                            parseFloat(machinedata.data.sectorSize) / 100000000.0;
                        }*/
                        //  machinedata.data.sectorSize = sectorSizeva;
                        //this.machinedata = eval("(" + machinedata + ")").data;
                        this.machinedata = response.data.data;
                        let i = 0;
                        for (i; i < this.machinedata.length; i++) {
                            if (
                                this.machinedata[i].sectorSize == null ||
                                this.machinedata[i].sectorSize == 0
                            ) {
                                this.machinedata[i].sectorSize = 0.0;
                            } else {
                                var temp =
                                    (parseInt(this.machinedata[i].sectorSize, 10) / 1000000000.0)
                                        .toString()
                                        .indexOf(".") + 3;
                                this.machinedata[i].sectorSize =
                                    (parseInt(this.machinedata[i].sectorSize, 10) / 1000000000.0)
                                        .toString()
                                        .substring(0, temp) + "TB";
                                // alert(this.machinedata[i].sectorSize);
                            }
                        }
       
                        if (this.machinedata[i].money == null || this.machinedata[i].money == 0) {
                            this.machinedata[i].money = 0.0;
                        } else {
                             var temp = (parseInt(this.machinedata[i].money, 10) / 1000000000000000000.0)
                                        .toString().indexOf(".") + 3;
                            this.machinedata[i].money = (this.machinedata[i].money / 1000000000000000000.0)
                                        //.toString()
                                      //  .substring(0, temp)
                        }
                        //alert(this.machinedata[0].sectorSize);
                        this.machinetotalCount = response.data.data.length;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            calculateMonth() {
                var data = new Date();
                var year = data.getFullYear();
                var mon = data.getMonth() + 1;
                var arry = new Array();
                arry[0] = mon;
                for (var i = 1; i < 6; i++) {
                    mon = mon - 1;
                    if (mon <= 0) {
                        year = year - 1;
                        mon = mon + 12;
                    }
                    arry[i] = mon;
                }
                return arry.reverse();
            },
            timeInterval() { },
            timeformatter: function (row, column) {
                let date = row.posttime;
                if (date == undefined) {
                    return "";
                }
                var posttime = new Date(row.posttime);
                var year = posttime.getFullYear(),
                    month = posttime.getMonth() + 1,
                    day = posttime.getDate(),
                    hour = posttime.getHours(),
                    min = posttime.getMinutes(),
                    sec = posttime.getSeconds();
                var newTime =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hour < 10 ? "0" + hour : hour) +
                    ":" +
                    (min < 10 ? "0" + min : min) +
                    ":" +
                    (sec < 10 ? "0" + sec : sec);
                return newTime;
            },
            filterChange(filters) {
                if (filters != null) {
                    alert(filters.machinetype);
                }
            }
        },
        created() { }
    };
</script>
<style scoped>

    body {
        padding: 0px;
        margin: 0px;
        color: #fff;
        font-family: "微软雅黑";
    }

    .BlockHeight {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        dispaly: block;
        float: left;
    }

    .ProvingStorage {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: right;
        margin-right: 20px;
        margin-top: 20px;
    }

    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: rgba(141, 214, 217, 0.4) !important;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: antiquewhite;
        color: #fff;
    }

    .el-select-dropdown__item hover {
        background-color: bisque;
    }

    .el-select-dropdown__list {
        background-color: aqua !important;
    }

    .el-table-filter__list {
        background-color: aqua !important;
    }

    .el-table_header s {
        text-align: center !important;
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
