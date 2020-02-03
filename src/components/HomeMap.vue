<template>
  <div class="map-container">
    <div id="myChart" class="map" :style="{width: '100%', height: '700px'}"></div>
  </div>
</template>

<script>
 import globalMap from "../mock/globalMap";
import { getInfo } from "../http/http";
export default {
  data() {
    return {
      mapData: ""
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    getAirportCoord(idx) {
      const mapData = this.mapData;
      return [mapData.nodes[idx].long, mapData.nodes[idx].lat];
    },
    async drawLine() {
      const res = await getInfo();
      this.mapData = res.data.data;
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      const mapData = res.data.data;
      // 获取线的连接点
      var routes = mapData.routes.map(airline => {
        return [
          this.getAirportCoord(airline[0]),
          this.getAirportCoord(airline[1])
        ];
      });
      var pointsData = [];
      mapData.nodes.forEach(airline => {
        pointsData.push([airline.long, airline.lat]);
      });
      var series = [{
        type: "lines3D",
        name: '123',
        effect: {
          show: true,
          trailWidth: 1,
          trailLength: 0.15,
          trailOpacity: 1,
          trailColor: "rgb(30, 30, 60)"
        },
        lineStyle: {
          width: 1,
          color: "orange",
          opacity: 0.1
        },
        blendMode: "lighter",
        data: routes
      }];
      series.push({
        type: "scatter3D",
        coordinateSystem: "globe",
        blendMode: "lighter",
        symbolSize: 7,
        itemStyle: {
          color: "#F4A460",
          opacity: 0.6
        },
        data: pointsData
      });
      console.log(series)
      myChart.setOption({
        globe: {
          baseTexture: require("../assets/images/world_topo.jpg"),
          heightTexture: require("../assets/images/bathymetry_4k.jpg"),
          globeRadius: 70,
          shading: "lambert",
          light: {
            ambient: {
              intensity: 0.4
            },
            main: {
              intensity: 0.4
            }
          },
          viewControl: {
            autoRotate: true
          }
        },
        series: series
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>