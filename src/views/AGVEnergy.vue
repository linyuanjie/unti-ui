<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <span class="title">能耗曲线</span>
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
      resultsList: [],
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
      if (item.reportname == "能耗曲线") {
        this.arrlist = item.datas;
      }
    });
    this.callGrpcService();
    setInterval(this.callGrpcService, 600000);
  },
  methods: {
    callGrpcService() {
      const request = new CountRequest();
      request.setWorkflownum(this.jsonData[4].sceneName);
      request.setNum(this.jsonData[4].datas);
      request.setCounttype("1");
      const client = new GreeterClient("http://localhost:5001", null, null);
      client.countEquipment(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          if (this.resultsList.length == 0) {
            this.resultsList = gridPointData.resultsList;
            this.resultsList.forEach((parent) => {
              parent.data = [];
              parent.data.push(parent["powercount"]);
            });
          } else {
            this.resultsList.forEach((parent) => {
              gridPointData.resultsList.forEach((item) => {
                if (parent.name == item.name) {
                  parent.data.push(item["powercount"]);
                }
              });
            });
          }
          this.agvTaskResults = this.resultsList;
          console.log("this.agvTaskResults", this.agvTaskResults);
          this.loopEveryFiveSeconds();
        }
      });
    },
    loopEveryFiveSeconds() {
      let list = this.subGroup(this.agvTaskResults, 5);
      const totalIterations = list.length; // 假设我们有5次循环
      let currentIteration = 0;
      if (totalIterations > 1) {
        this.intervalId = setInterval(() => {
          if (currentIteration < totalIterations) {
            // 执行你的逻辑
            this.getEchartData(list[currentIteration]);
            currentIteration++;
          } else {
            // 重置迭代器并清除间隔
            currentIteration = 0;
            // clearInterval(this.intervalId);
          }
        }, 5000); // 每隔5秒执行一次
      } else {
        this.getEchartData(list[currentIteration]);
      }
    },
    subGroup(arr, len) {
      var newArr = [];
      for (var i = 0; i < arr.length; i += len) {
        newArr.push(arr.slice(i, i + len));
      }
      return newArr;
    },
    getEchartData(list) {
      let xdata = [];
      let sdata = [];
      list.forEach((element) => {
        xdata.push(element["name"]);
        sdata.push({
          name: element["name"],
          type: "line",
          smooth: true,
          data: element["data"],
        });
      });
      var option;
      option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            fontSize: 15,
            color: "#ffF",
          },
          data: xdata,
        },
        grid: {
          left: "3%",
          right: "4%",
          // bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          axisLabel: {
            color: "#FFF",
            fontSize: 15,
          },
          data: ["10min", "20min", "30min", "40min", "50min", "60min"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#FFF",
            fontSize: 15,
          },
        },
        series: sdata,
      };
      if (option && typeof option === "object") {
        this.myChart.setOption(option);
      }
      window.addEventListener("resize", this.myChart.resize);
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    clearTimeout(this.intervalId);
  },
  destroyed() {
    clearInterval(this.intervalId);
    clearTimeout(this.intervalId);
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
  /* padding-bottom: 20px !important; */
}
</style>
