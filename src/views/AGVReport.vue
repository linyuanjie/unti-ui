<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <span class="title">AGV稼动率</span>
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
      intervalId: {},
    };
  },
  mounted() {
    this.domdev = this.$refs.chart;
    this.myChart = echarts.init(this.domdev, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    this.jsonData = window.ReportData;
    console.log(this.jsonData, "jsonData");
    this.jsonData.forEach((item) => {
      if (item.reportname == "AGV稼动率") {
        this.arrlist = item.datas;
      }
    });
    this.callGrpcService();
    setInterval(this.callGrpcService, 10000);
  },
  methods: {
    callGrpcService() {
      this.agvTaskResults = [];
      const request = new CountRequest();
      request.setWorkflownum(this.jsonData[0].sceneName);
      request.setNum(this.jsonData[0].datas);
      request.setCounttype("1");
      const client = new GreeterClient("http://localhost:5001", null, null);
      client.countAgv(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          this.agvTaskResults = gridPointData.resultsList;
          console.log("response.toObject:", response.toObject());
          this.getEchartData();
        }
      });
    },
    getEchartData() {
      let xdata = [];
      let sdata = [];
      this.agvTaskResults.forEach((element) => {
        xdata.push(element["agvname"]);
        sdata.push(element["availability"]);
      });
      var option;
      option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
        },
        toolbox: {
          show: true,
        },
        graphic: [
          {
            type: "text",
            left: "center",
            top: "middle",
            invisible: xdata.length != 0,
            style: {
              text: "暂无数据",
              textAlign: "center",
              fontSize: 20,
              fill: "#fff",
            },
          },
        ],
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: xdata,
            axisLabel: {
             fontSize: 18,
              color: "#FFF",
              // interval: 0,
              // rotate: "40",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
             fontSize: 18,
              color: "#FFF",
            },
          },
        ],
        series: [
          {
            data: sdata,
            type: "bar",
            // barWidth: "40%",
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
#header {
  background: url(../assets/images/报表_1.png) no-repeat;
  color: #fff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-size: cover;
  background-position: center center;
}
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
