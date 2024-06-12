<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <a-icon type="caret-right" class="rightSan" />
      <span class="title">仓库库位统计</span>
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
      client.twinsWarehouseCount(request, {}, (err, response) => {
        if (err) {
          console.log("Error:", err);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          console.log("gridPointData", gridPointData);

          if (gridPointData.waretraystatusresultsList.length > 0) {
            this.agvTaskResults = gridPointData.waretraystatusresultsList[0];
          } else {
            this.agvTaskResults ={
              "warehouseid":'无',
              "totalcount":'0',
              "occupiedcount":'0',
              "freecount":'0',
              "warehouseid":'无',
            }
          }
          this.getTwoChartData();
        }
      });
    },
    getTwoChartData() {
      var option;
      option = {
        title: [
          {
            text: this.agvTaskResults["warehouseid"],
            left: "left",
            textStyle: {
              color: "#FFF", // 标题字体颜色
              fontSize: 20,
              fontFamily: "Microsoft YaHei",
            },
          },
          {
            subtext: "总库位数：" + this.agvTaskResults["totalcount"],
            // subtext: "暂无数据",
            left: "50%",
            top: "75%",
            textAlign: "center",
            subtextStyle: {
              color: "#FFF",
              fontSize: 20,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          // top: "5%",
          left: "right",
          textStyle: {
            color: "#FFF",
            fontSize: 15,
          },
        },
        series: [
          {
            name: this.agvTaskResults["warehouseid"],
            type: "pie",
            bottom: "20%",
            radius: "80%",
            emphasis: {
              itemStyle: {
                // shadowBlur: 10,
                // shadowOffsetX: 0,
                // shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: [
              {
                itemStyle: { color: "#4f7be4" },
                value: this.agvTaskResults["occupiedcount"],
                name: "已使用",
              },
              {
                itemStyle: { color: "#FDC767" },
                value: this.agvTaskResults["freecount"],
                name: "空余",
              },
            ],
            label: {
              show: true,
              color: "#FFF",
              textStyle: {
                fontSize: 20,
              },
              formatter: function (data) {
                return data.value;
              },
            },
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
  padding-left: 0px;
}
::v-deep canvas {
  padding-bottom: 20px !important;
}
</style>
