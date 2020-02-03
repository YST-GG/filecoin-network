<template>
    <div class="home">
        <el-scrollbar style="height:100%">
            <div style="width:560px;float:left">
                <el-col :span="4" class="elgutter">
                    <div style="height:120px;width:530px">
                        <div class="panel-container">
                            <div class="block" style="padding-top:10px">
                                <span style="font-size:18px">Avg Message Size</span>
                                <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.averageMsgsize}}B</span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="block">
                                <span style="font-size:18px">Avg Price</span>
                                <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.averagePrice}}</span>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>

                            <div style="height:120px;width:530px;padding-top:15px;padding-left:10px">
                                <div class="networkStorage">
                                    <div class="panel-height-helper">
                                        <div class="panel-wrapper">
                                            <div class="panel-height-helper">
                                                <div class="panel-header grid-drag-handle">
                                                    <span class="panel-title">
                                                        <span class="icon-gf panel-alert-icon"></span>
                                                        <span class="panel-title-text">
                                                            <font style="vertical-align: inherit;">
                                                                <font class="height" style="display:block;text-align:center;font-size:18px">NetworkStorage</font>
                                                            </font>
                                                        </span>
                                                        <span class="panel-menu-container dropdown">
                                                            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.networkStorage}}TiB</span>
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
                                                        <span class="panel-title-text">
                                                            <font style="vertical-align: inherit;">
                                                                <font class="height" style="display:block;text-align:center;font-size:18px">Block Height</font>
                                                            </font>
                                                        </span>
                                                        <span class="panel-menu-container dropdown">
                                                            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.blockHeight}}</span>
                                                            <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div style="width:530px;height:420px;margin-top:20px;margin-left:20px;border-radius:8px">
                                <el-table :data="minerData.slice((currentPage-1)*PageSize,currentPage*PageSize)" white-space='wrap-line' :default-sort="{prop:'height', order: 'descending'}">
                                    <el-table-column align="center" label="miner表格数据">
                                        <el-table-column align="center" prop="minerName" label="矿工名称" sortable show-overflow-tooltip></el-table-column>
                                        <el-table-column align="center" prop="power" label="算力" sortable show-overflow-tooltip></el-table-column>
                                    </el-table-column>
                                </el-table>
                                <el-pagination @size-change="handleSizeChange"
                                               @current-change="handleCurrentChange"
                                               :current-page="currentPage"
                                               :page-sizes="pageSizes"
                                               :page-size="PageSize" layout="total,sizes,prev,pager,next,jumper"
                                               :total="totalCount">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                    <div style="height:160px;width:530px;padding-top:15px;padding-left:10px;position:inherit">


                    </div>
                </el-col>
            </div>
            <div style="width:420px;float:right;margin-right:20px;position:inherit">
                <div class="averageBlocktime">
                    <div class="panel-height-helper" ref="panel">
                        <div class="panel-wrapper">
                            <div class="panel-height-helper">
                                <div class="panel-header grid-drag-handle">
                                    <span class="panel-title">
                                        <span class="icon-gf panel-alert-icon"></span>
                                        <span class="panel-title-text">
                                            <font style="vertical-align: inherit;">
                                                <font class="height" style="display:block;text-align:center;font-size:18px">Avg Blocktime</font>
                                            </font>
                                        </span>
                                        <span class="panel-menu-container dropdown">
                                            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.averageBlocktime}}</span>
                                            <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lastBlocktime">
                    <div class="panel-height-helper" ref="panel">
                        <div class="panel-wrapper">
                            <div class="panel-height-helper">
                                <div class="panel-header grid-drag-handle">
                                    <span class="panel-title">
                                        <span class="icon-gf panel-alert-icon"></span>
                                        <span class="panel-title-text">
                                            <font style="vertical-align: inherit;">
                                                <font class="height" style="display:block;text-align:center;font-size:18px">last Blocktime</font>
                                            </font>
                                        </span>
                                        <span class="panel-menu-container dropdown">
                                            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.lastBlocktime}}</span>
                                            <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pledgeCollateral">
                    <div class="panel-height-helper" ref="panel">
                        <div class="panel-wrapper">
                            <div class="panel-height-helper">
                                <div class="panel-header grid-drag-handle">
                                    <span class="panel-title">
                                        <span class="icon-gf panel-alert-icon"></span>
                                        <span class="panel-title-text">
                                            <font style="vertical-align: inherit;">
                                                <font class="height" style="display:block;text-align:center;font-size:18px">Pledge Collateral</font>
                                            </font>
                                        </span>
                                        <span class="panel-menu-container dropdown">
                                            <span class="fa fa-caret-down panel-menu-toggle" data-toggle="dropdown" style="font-size:20px;display:block;text-align:center;padding-top:30px">{{lotusData.pledgeCollateral}}FIL</span>
                                            <ul class="dropdown-menu dropdown-menu--menu panel-menu" role="menu"></ul>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg" style="width:900px;margin-left:580px;text-align:center;position:inherit;">
                <div style="width:400px;height:420px;margin-left:60px;position:absolute;padding-top:20px" id="mainCanvas" ref="changedArea"></div>
                <div class="chain" style="width:660px;height:720px;transition:all.3s ease;padding-top:500px;position:inherit">
                    <el-table :data="chainData.slice((chaincurrentPage-1)*chainPageSize,chaincurrentPage*chainPageSize)" style="border-collapse:separate;border-spacing:0px 10px;" white-space='wrap-line'   :default-sort="{prop:'height', order: 'descending'}">
                        <el-table-column width="100px" prop="height" label="Height" sortable show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column class="tipset" align="center" label="tipset" sortable show-overflow-tooltip>
                            <template slot-scope="scope">
                                <div>
                                    <span>
                                        {{scope.row.tipset.split(' ')[0] == '' ? '': scope.row.tipset.split(' ')[0]}}<br>
                                        {{scope.row.tipset.split(' ')[1] == '' ? '': scope.row.tipset.split(' ')[1]}}<br>
                                        {{scope.row.tipset.split(' ')[2] == '' ? '': scope.row.tipset.split(' ')[2]}}<br>
                                        {{scope.row.tipset.split(' ')[3] == '' ? '': scope.row.tipset.split(' ')[3]}}
                                    </span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>

                    <div style="height:120px;padding-top:10px">
                        <el-pagination @current-change="handle_CurrentChange"
                                       :current-page="chaincurrentPage"
                                       :page-sizes="chainpageSizes"
                                       :page-size="chainPageSize"
                                       layout="total,sizes,prev,pager,next,jumper"
                                       :total="chaintotalCount">
                        </el-pagination>
                    </div>
                </div>
            </div>

        </el-scrollbar>

    </div>
</template>
<script>
    import NavBar from "../components/header.vue";
    import { NavMenu } from "element-ui";
    import { getMinerdata, getChaindata, getlotusMessage } from "../http/http";
    import echarts from "echarts";
    import "echarts-gl";
    import { BaiduMap, BmScale, BmGeolocation } from "vue-baidu-map";
    import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";
    import { Toast, Dialog } from "vant";
    import { scrollbar } from "element-ui";
    import axios from "axios";
    export default {
        props: ["childData"],
        props: {
            zoom: {
                type: Number,
                default: 2
            },
            Longitude: {
                type: Number,
                default: 116.400244 //北京经度
            },
            latitude: {
                type: Number,
                default: 39.92556 //北京维度
            }
        },
        name: "Map",
        data() {
            return {
                tablestyle: {
                    backgroundColor: "rgba(0, 0, 0, 0.2)"
                },
                // 总数据
                minerData: [],
                //默认显示第几页
                currentPage: 1,
                totalCount: 1,
                // 个数选择器（可修改）
                pageSizes: [10, 15, 20, 25],
                // 默认每页显示的条数（可修改）
                PageSize: 10,
                chainData: [],
                //默认显示第几页
                chaincurrentPage: 1,
                chainpageSizes: [10, 20, 30, 40],
                chainPageSize: 10,
                start: "启动",
                state: [
                    { text: "已启动", value: 0 },
                    { text: "启动", value: 1 },
                    { text: "停止", value: 2 }
                ],
                filter_options: [
                    { text: "CPU", value: 0 },
                    { text: "GPU", value: 1 },
                    { text: "MHM", value: 2 }
                ],
                type: "",
                machinetype: "",
                chartLine: "",
                chartline: "",
                /*  opinion: ["1", "3", "3", "4", "5"],*/
                opinionData: ["1", "3", "3", "4", "5"],
                tabledata: [
                    {
                        machineID: "1",
                        machinetype: "CPU",
                        minerName: "t01475",
                        power: "16.34"
                    },
                    {
                        machineID: "2",
                        machinetype: "GPU",
                        minerName: "t01485",
                        power: "5.97"
                    },
                    {
                        machineID: "3",
                        machinetype: "MHM",
                        minerName: "t01011",
                        power: "2.75"
                    }
                ],
                lotusData: {},
                chainData: [],
                split_data: {},
                sphere: "",
                camera: "",
                scene: "",
                renderer: "",
                chartline: "",
                earthImg: "",
                earthBallSize: "",
                earth_geometry: "",
                earthTexture: "",
                geometry: "",
                material: "",
                mesh: "",
                group: "",
                container: "",
                globeMesh: "",
                texture: "",
                globeMaterial: "",
                earth_material: "",
                boxwidth: "",
                boxheight: "",
                pos: "",
                rotationSpeed: 0.02,
                controls: {
                    rotationSpeed: 0.02,
                    bouncingSpeed: 0.03
                },
                sphere: "",
                cube: "",
                step: 0,
                active: "",
                chart: echarts.ECharts,
                bmap: {},
                linesSeries: [],
                scatterSeries: [],
                effectScatterSeries: [],
                map: "",
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
                    xAxis3D: {},
                    yAxis3D: {},
                    zAxis3D: {},
                    globe: {
                        heightTexture: "./assets/images/world.jpg",
                        show: true,
                        shading: "color",
                        //视角控制：
                        viewControl: {
                            //projection:"orthographic",
                            rotateSensitivity: 0, //鼠标旋转灵敏度
                            zoomSensitivity: 0, //鼠标缩放灵敏度
                            autoRotate: true, //地球是否自传
                            autoRotateAfterStill: 0.001, //鼠标停止后多久恢复旋转(为0时暂停后不恢复旋转)
                            //alpha:160,//视角绕 x 轴，即上下旋转的角度
                            //beta:-20,//视角绕 y 轴，即左右旋转的角度。
                            targetCoord: [116.46, 39.92] //定位到哪里
                        }
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
                            boundingCoords: [
                                [-180, 90],
                                [180, -90]
                            ],
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
                isAddTrend: false,
                isReduceTrend: false,
                isAddAmountTrend: false,
                isReduceAmountTrend: false,
                isReduceNetWorkTrend: false,
                isAddNetWorkTrend: false
            };
        },
        created() { },
        computed: {},
        mounted() {
            this.init();
            this.filterChange();
            this.getMinerdata();
            this.getlotusMessage();
            this.getChaindata();
            this.timer();
            this.chartline = echarts.init(this.$refs.chart);
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    //设置tip提示
                    trigger: "axis"
                },
                legend: {
                    //设置区分（哪条线属于什么）
                    data: ["", ""]
                },
                color: ["#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
                xAxis: {
                    //设置x轴
                    type: "category",
                    boundaryGap: false, //坐标轴两边不留白
                    data: [
                        "2020-1-1",
                        "2020-2-1",
                        "2020-3-1",
                        "2020-4-1",
                        "2020-5-1",
                        "2020-6-1",
                        "2020-7-1",
                        "2020-8-1"
                    ],
                    name: "时间", //X轴 name
                    nameTextStyle: {
                        //坐标轴名称的文字样式
                        color: "#FA6F53",
                        fontSize: 16,
                        padding: [0, 0, 0, 20]
                    },
                    axisLine: {
                        //坐标轴轴线相关设置。
                        lineStyle: {
                            color: "#FA6F53"
                        }
                    }
                },
                yAxis: {
                    name: "Time between tipsets",
                    nameTextStyle: {
                        color: "#FA6F53",
                        fontSize: 16,
                        padding: [0, 0, 10, 0]
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#FA6F53"
                        }
                    },
                    type: "value"
                },
                series: [
                    {
                        name: "Block Time",
                        data: [220, 232, 201, 234, 290, 230, 220, 240],
                        type: "line", // 类型为折线图
                        lineStyle: {
                            // 线条样式 =>必须使用normal属性
                            normal: {
                                color: "#8AE09F"
                            }
                        }
                    },
                    {
                        name: "Null Blocks",
                        data: [0, 0, 0, 0, 0, 0, 0, 0],
                        type: "line",
                        lineStyle: {
                            normal: {
                                color: "#FA6F53"
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
      
        },
        //监听数据变化
        watch: {
            chainData: {
                handler: function (newVal, oldVal) {
                    //   console.log("oldVal:", oldVal)
                   
                    // console.log("newVal:", newVal);
                    this.$set(this.chainData, newVal);
                },
                deep: true
            },
            lotusData: {
                handler: function (newval, oldval) {
                    //    console.log("newval:", newval);
                    this.$set(this.lotusData, newval);
                },
                deep: true
            },
            minerData: {
                handler: function (newVal, oldVal) {
                    //     console.log("newVal:", newVal);
                    this.$set(this.minerData, newVal);
                },
                deep: true
            }
        },
        methods: {
            init() {
                let containerRotation = this.$refs.changedArea;
                let controllerRotation = new GIO.Controller(containerRotation);
             //   controllerRotation.setAutoRotation(true, 1);
                controllerRotation.setTransparentBackground(true);
                controllerRotation.setSurfaceColor("#23A4FF");
                controllerRotation.lightenMentioned(true);
                controllerRotation.configure({
                    color: {
                        in: 0xff0000,
                        out: 0x00ff00
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
            mouseOver: function () {
                this.active = "background-color: #cccccc";
            },
            mouseLeave: function () {
                this.active = "";
            },
            filterChange(filters) {
                if (filters != null) {
                    this.type = filters.machinetype;
                    alert(filters.machinetype);
                }
                //this.getTableInfo();// 通过接口获取数据的方法
            },
            async timer() {
                this.time = setInterval(() => {
                this.getMinerdata();
                this.getlotusMessage();
                this.getChaindata();
                   
            }, 200);
            },

            getMinerdata() {
                getMinerdata()
                    .then(res => {
                        let minerData = JSON.stringify(res.data);
                        //     console.log(minerData);
                        this.minerData = res.data;
                        this.totalCount = res.data.leFngth;
                  //      console.log(this.minerData);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleSizeChange(page) {
                this.PageSize = page;
                this.currentPage = 1;
            },
            handleCurrentChange(curpage) {
                this.currentPage = curpage;
            },
            handle_SizeChange(val) {
                this.chainPageSize = val;
                this.chaincurrentPage = 1;
            },
            handle_CurrentChange(val) {
                this.chaincurrentPage = val;
            },
            getlotusMessage() {
                getlotusMessage()
                    .then(respose => {
                        let lotusData = JSON.stringify(respose.data);
                        this.lotusData = eval("(" + lotusData + ")");
                        //    console.log(lotusData);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getChaindata() {
                getChaindata()
                    .then(resp => {
                        let chainData = JSON.stringify(resp.data);
                        this.chainData = eval("(" + chainData + ")");
                        this.chaintotalCount = resp.data.length;
                        //    console.log(chainData);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            tableRowClassName({ col, colIndex }) {
                let color = "";
                color = "rgb(243, 247, 253)";
            },
            backStyle({ col, colIndex }) {
                let backgroundcolor = "";
                backgroundcolor = "rgba(0, 0, 0, 0.2)";
            }
        }
    };
</script>
<style >

    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background: rgba(141, 214, 217, 0.4) !important;
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

    .el-table_header {
        text-align: center !important;
    }

    .el-table {
        border-radius: 8px;
    }

    .el-table__expanded-cell {
        white-space: pre-wrap;
        background: rgba(141, 214, 217, 0.4);
    }

    .el-table__row {
        backgroundcolor: rgb(243, 247, 253) !import;
    }

    .el-table > > > th,
    .el-table > > > td,
    .el-table > > > th.is-leaf {
        border-bottom: none;
    }

    .el-pagination > > > .btn-next,
    .el-pagination > > > .btn-prev {
        background: none !important;
    }
</style>
<style  scoped>
    .home {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .panel-container {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        margin-left: 10px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: left;
    }

    .bar {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: right;
    }

    .chain {
    }

    .networkStorage {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: left;
    }

    .blockHeight {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: right;
    }

    .averageBlocktime {
        background-color: rgba(141, 214, 217, 0.4);
        border: 1px solid #141414;
        position: relative;
        border-radius: 4px;
        height: 100px;
        width: 250px;
        dispaly: block;
        float: right;
        margin-right: 20px;
    }

    .lastBlocktime {
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

    .pledgeCollateral {
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

    .el-table .cell.el-tooltip {
        white-space: pre-wrap;
    }

    .height {
        padding-top: 10px;
    }

    .block {
        text-align: center;
    }

    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
        transition: all 5s;
    }

</style>
