<template>
  <div id="content">
    <a-row class="groups">
      <div id="header">
        <span class="title">系统能耗统计</span>
      </div>
      <div style="width: 500px; height: 200px">
        <table
          class="tablecss"
          width="500"
          height="150"
          align="left"
          cellpadding="10"
          cellspacing="0"
        >
          <thead>
            <tr class="theadcss">
              <th>车辆名</th>
              <th>任务数</th>
              <th>平均时间</th>
              <th>异常任务</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in agvTaskResults" :key="String(index)">
              <td>{{ item[0] }}</td>
              <td>{{ item[1] }}</td>
              <td>{{ item[2] }}</td>
              <td>{{ item[3] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </a-row>
    <a-row class="groups" style="display: grid">
      <div id="header">
        <span class="title">仓库库位统计</span>
      </div>
      <div ref="twochart" style="width: 500px; height: 250px"></div>
    </a-row>
    <a-row class="groups" style="display: grid">
      <div id="header">
        <span class="title">仓库出入库统计</span>
      </div>
      <div ref="chart" style="width: 500px; height: 300px"></div>
    </a-row>
  </div>
</template>

<script>
import { GreeterClient } from "../utils/proto/digitaltwins_grpc_web_pb";
import { AgvAgvMapRequest, MockStateInfoRequest } from "../utils/proto/digitaltwins_pb";
import * as echarts from "echarts";
export default {
  // name: "dome",
  props: {},
  data() {
    return {
      agvTaskResults: [],
    };
  },
  mounted() {
    this.getTableList();
    this.getEchartData();
    this.getTwoChartData();
    this.callGrpcService();
  },
  methods: {
    getTableList() {
      const request = new MockStateInfoRequest();
      request.setWorkflownum("2423423434");
      request.setMocktype("2");
      const client = new GreeterClient("http://localhost:5001", null, null);
      client.twinsAgvTaskCount(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          this.agvTaskResults = response.array[0];
          console.log("Response1", response);
        }
      });
    },
    getTwoChartData() {
      var dom = this.$refs.twochart;
      var myChart = echarts.init(dom, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      var option;
      option = {
        title: [
          {
            text: "仓库名1",
            left: "left",
            textStyle: {
              color: "#FFF", // 标题字体颜色
              fontSize: 16,
              fontFamily: "Microsoft YaHei",
            },
          },
          {
            // subtext: "总库位数：1234",
            subtext: "暂无数据",
            left: "50%",
            top: "80%",
            textAlign: "center",
            subtextStyle: {
              color: "#FFF",
            },
          },
        ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "right",
          textStyle: {
            color: "#FFF",
          },
        },
        series: [
          {
            name: "仓库名1",
            type: "pie",
            radius: "50%",
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: [
              { itemStyle: { color: "#4f7be4" }, value: 0, name: "已使用" },
              { itemStyle: { color: "#FDC767" }, value: 0, name: "空余" },
            ],
            label: {
              color: "#FFF",
              fontSize: 13,
              formatter: function (data) {
                return data.value;
              },
            },
          },
        ],
      };
      if (option && typeof option === "object") {
        myChart.setOption(option);
      }
      window.addEventListener("resize", myChart.resize);
    },
    getEchartData() {
      var dom = this.$refs.chart;
      var myChart = echarts.init(dom, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      var option;
      option = {
        title: [
          {
            text: "仓库名1",
            left: "left",
            textStyle: {
              color: "#FFF", // 标题字体颜色
              fontSize: 16,
            },
          },
          {
            subtext: "暂无数据",
            left: "50%",
            top: "80%",
            textAlign: "center",
            subtextStyle: {
              color: "#FFF",
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
        legend: {
          textStyle: {
            color: "#FFF",
          },
          left: "right",
          data: [
            { itemStyle: { color: "#efaf4d" }, name: "出库流量" },
            { itemStyle: { color: "#00d5ed" }, name: "入库流量" },
            { name: "出库量" },
            { name: "入库量" },
          ],
        },
        xAxis: [
          {
            type: "category",
            // data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", ""],
            data: [],
            show: true,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              color: "FFF", // x轴字体颜色
              interval: 0, //轴显示所有的数据
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            show: true,
            // name: "入库流量",
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
              // formatter: "{value} ml",
              color: "#FFF",
            },
          },
          {
            type: "value",
            show: false,
            // name: "出库量",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} M",
              color: "#FFF",
            },
          },
          {
            type: "value",
            show: false,
            // name: "入库量",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              show: false,
              formatter: "{value} M",
              color: "#FFF",
            },
          },
        ],
        series: [
          {
            name: "出库流量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            itemStyle: { color: "#efaf4d" },
            // data: [0, 0, 0, 0, 0, 0, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            data: [],
            show: true,
          },
          {
            name: "入库流量",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            itemStyle: { color: "#00d5ed" },
            // data: [0, 0, 0, 0, 0, 0, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            data: [],
          },
          {
            name: "出库量",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " M";
              },
            },
            // data: [20, 22, 10, 8, 6, 10, 20, 23, 23, 16, 12, 7],
            data: [],
            smooth: true,
          },
          {
            name: "入库量",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " M";
              },
            },
            // data: [18, 20, 9, 7, 8, 13, 19, 31, 39, 28, 22, 11],
            data: [],
            smooth: true,
          },
        ],
      };
      if (option && typeof option === "object") {
        myChart.setOption(option);
      }
      window.addEventListener("resize", myChart.resize);
    },
    callGrpcService() {
      const request = new AgvAgvMapRequest();
      request.setWorkflownum("TestV2");
      request.serializeBinary("");
      // request.setRegion("1");
      const client = new GreeterClient("http://localhost:5001", null, null);

      console.log(client, "client");
      client.countAgv(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          console.log("Response:", response.getMessage());
        }
      });
    },
  },
};
</script>

<style scoped>
@import "/src/styles/aggrid.scss";
.groups {
  color: #fff;
}
.tablecss {
  margin-left: 20px;
}
.theadcss {
  /* font-size: 18px; */
  color: #6ed6fb;
}
</style>
