<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <span class="title">仓库出入库曲线</span>
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
    this.jsonData = window.ReportData;
    console.log(this.jsonData, "jsonData");
    this.jsonData.forEach((item) => {
      if (item.reportname == "仓库出入库曲线") {
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
      request.setWorkflownum(this.jsonData[2].sceneName);
      request.setNum(this.jsonData[2].datas);
      request.setCounttype("1");
      const client = new GreeterClient("http://localhost:5001", null, null);
      client.countWarehouse(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          gridPointData.resultsList.forEach((item) => {
            item["name"] = item["name"] || 0;
            item["totalcapacity"] = item["totalcapacity"] || 0;
            item["usedstorage"] = item["usedstorage"] || 0;
            item["vacancyrate"] = item["vacancyrate"] || 0;
            item["inboundquantity"] = item["inboundquantity"] || 0;
            item["outboundquantity"] = item["outboundquantity"] || 0;
            this.agvTaskResults.push(item);
          });
          console.log("response.toObject:", response.toObject());
          this.getEchartData();
        }
      });
    },
    getEchartData() {
      let xdata = [];
      let outdata = [];
      let indata = [];
      let rongdata = [];
      this.agvTaskResults.forEach((element) => {
        xdata.push(element["name"]);
        outdata.push(element["outboundquantity"]);
        indata.push(element["inboundquantity"]);
        rongdata.push(element["totalcapacity"]);
      });
      var option;
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#FFF",
            },
          },
        },
        legend: {
          textStyle: {
            fontSize: 15,
            color: "#ffF",
          },
          data: ["出库量", "入库量", "容量"],
        },
        xAxis: [
          {
            type: "category",
            data: xdata,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              color: "#FFF",
              fontSize: 18,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "入库量",
            axisLabel: {
              // formatter: "{value} ml",
              color: "#FFF",
              fontSize: 18,
            },
          },
          {
            type: "value",
            name: "容量",
            axisLabel: {
              // formatter: "{value} °C",
              color: "#FFF",
              fontSize: 18,
            },
          },
        ],
        series: [
          {
            name: "出库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + "";
              },
            },
            itemStyle: {
              color: "#95f204",
            },
            data: outdata,
          },
          {
            name: "入库量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + "";
              },
            },
            itemStyle: {
              color: "#807ffe",
            },
            data: indata,
          },
          {
            name: "容量",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + "";
              },
            },
            itemStyle: {
              color: "#f59b23",
            },
            data: rongdata,
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
