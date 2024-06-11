<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <a-icon type="caret-right" class="rightSan" />
      <span class="title">仓库出入库统计</span>
    </div>
    <div ref="chart" class="common"></div>
  </div>
</template>

<script>
import { GreeterClient } from "../utils/proto/digitaltwins_grpc_web_pb";
import {
  CountRequest,
  MockStateInfoRequest,
} from "../utils/proto/digitaltwins_pb";
import * as echarts from "echarts";
export default {
  props: {},
  data() {
    return {
      agvTaskResults: [],
      arrlist: [],
      domdev: {},
      myChart: {},
    };
  },
  mounted() {
    this.domdev = this.$refs.chart;
    this.myChart = echarts.init(this.domdev, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    this.callGrpcService();
    setInterval(this.callGrpcService, 10000);
  },
  methods: {
    callGrpcService() {
      const request = new MockStateInfoRequest();
      request.setWorkflownum("2423423434");
      request.setMocktype("2");
      const client = new GreeterClient("https://localhost:5001", null, null);
      client.twinsStockMovementCount(request, {}, (err, response) => {
        if (err) {
          console.log("Error:", err);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          console.log("gridPointData", gridPointData);
          this.agvTaskResults = gridPointData;
          this.getEchartData();
        }
      });
    },
    getEchartData() {
      let yLine = [];
      let outLiu = [];//出库流量
      let inLiu = [];//入库流量
      let outNum = [];//出库量
      let inNum = [];//入库量
      this.agvTaskResults.stockmovementresultsList.forEach((item, index) => {
        yLine.push(item["hour"]);
        outLiu.push(item["outstockcount"]);
        inLiu.push(item["instockcount"]);
        if (index == this.agvTaskResults.stockmovementresultsList.length - 1) {
          outNum.push(this.agvTaskResults["outboundquantity"]);
          inNum.push(this.agvTaskResults["inboundquantity"]);
        } else {
          outNum.push(0);
          inNum.push(0);
        }
      });
      var option;
      option = {
        title: [
          {
            text: this.agvTaskResults["warehouseid"],
            left: "left",
            textStyle: {
              color: "#FFF",
              fontSize: 20,
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        graphic: [
          {
            type: "text",
            left: "center",
            top: "middle",
            invisible: this.agvTaskResults.stockmovementresultsList != 0,
            style: {
              text: "暂无数据",
              textAlign: "center",
              fontSize: 25,
              fill: "#fff",
            },
          },
        ],
        legend: {
          data: [
            { itemStyle: { color: "#fdad34" }, name: "出库流量" },
            { itemStyle: { color: "#00d7f2" }, name: "入库流量" },
            { itemStyle: { color: "#744ef5" }, name: "出库量" },
            { itemStyle: { color: "#7ac61c" }, name: "入库量" },
          ],
          textStyle: {
            color: "#FFF",
            fontSize: 15,
          },
          left: "right",
        },
        xAxis: [
          {
            type: "category",
            data: yLine,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              fontSize: 20,
              color: "#FFF",
              //interval: 0,
              // rotate: "40",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // name: "入库量",
            axisLabel: {
              fontSize: 20,
              color: "#FFF",
            },
          },
          {
            type: "value",
            // name: "出库流量",
            axisLabel: {
              fontSize: 20,
              color: "#FFF",
            },
          },
          {
            type: "value",
            // name: "入库流量",
            axisLabel: {
              fontSize: 20,
              color: "#FFF",
            },
          },
        ],
        series: [
          {
            name: "出库量",
            type: "bar",
            itemStyle: { color: "#744ef5" },
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value + " ml";
            //   },
            // },
            data: outNum,
          },
          {
            name: "入库量",
            type: "bar",
            itemStyle: { color: "#7ac61c" },
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value + " ml";
            //   },
            // },
            data: inNum,
          },
          {
            name: "出库流量",
            type: "line",
            smooth: true,
            itemStyle: { color: "#fdad34" },
            yAxisIndex: 1,
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value + " °C";
            //   },
            // },
            data: outLiu,
          },
          {
            name: "入库流量",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            itemStyle: { color: "#00d7f2" },
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value + " °C";
            //   },
            // },
            data: inLiu,
          },
        ],
      };
      if (option && typeof option === "object") {
        this.myChart.setOption(option);
      }
      window.addEventListener("resize", this.myChart.resize);
    },
  },
};
</script>

<style scoped>
@import "/src/styles/aggrid.scss";
#main {
  background: url(../assets/images/报表_bg.png) no-repeat center center fixed;
  background-size: cover;
}
.title {
  padding-left: 10px;
}
::v-deep canvas {
  padding-bottom: 20px !important;
}
</style>
