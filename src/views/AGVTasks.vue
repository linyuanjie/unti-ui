<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <span class="title">AGV任务图</span>
    </div>
    <div class="tabledev">
      <table
        class="tablecss"
        width="100%"
        height="150"
        cellpadding="10"
        cellspacing="0"
      >
        <thead>
          <tr class="theadcss">
            <th>AGV</th>
            <th>任务目标</th>
            <th>状态</th>
            <th>电量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in agvTaskResults" :key="String(index)">
            <td>{{ item["agvname"] }}</td>
            <td>{{ item["goalname"] }}</td>
            <td>{{ item["agvstate"] }}</td>
            <td>{{ item["batterylevel"] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { GreeterClient } from "../utils/proto/digitaltwins_grpc_web_pb";
import {
  CountRequest,
  MockStateInfoRequest,
} from "../utils/proto/digitaltwins_pb";
export default {
  props: {},
  data() {
    return {
      agvTaskResults: [],
      arrlist: [],
      jsonData: [],
    };
  },
  mounted() {
    this.jsonData = window.ReportData;
    console.log(this.jsonData, "jsonData");
    this.jsonData.forEach((item) => {
      if (item.reportname == "AGV任务图") {
        this.arrlist = item.datas;
      }
    });
    this.callGrpcService();
    setInterval(this.callGrpcService, 10000);
  },
  methods: {
    callGrpcService() {
      const request = new CountRequest();
      request.setWorkflownum(this.jsonData[1].sceneName);
      request.setNum(this.jsonData[1].datas);
      request.setCounttype("1");
      const client = new GreeterClient("http://localhost:5001", null, null);
      client.countAgv(request, {}, (err, response) => {
        if (err) {
          console.error("Error:", err.message);
        } else {
          this.agvTaskResults = [];
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          gridPointData.resultsList.forEach((item) => {
            item["agvname"] = item["agvname"] || "--";
            item["goalname"] = item["goalname"] || "--";
            if (item["agvstate"] == 0) {
              item["agvstate"] = "停止中";
            } else if (item["agvstate"] == 1) {
              item["agvstate"] = "空闲中";
            } else if (item["agvstate"] == 2) {
              item["agvstate"] = "工作中";
            } else if (item["agvstate"] == 3) {
              item["agvstate"] = "去充电";
            } else if (item["agvstate"] == 4) {
              item["agvstate"] = "充电中";
            } else {
              item["agvstate"] = item["agvstate"] || "--";
            }
            item["batterylevel"] = item["batterylevel"] || "--";
          });
          this.agvTaskResults = gridPointData.resultsList;
          console.log("response.toObject:", this.agvTaskResults);
        }
      });
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
.tabledev {
  width: 100%;
  color: aliceblue;
}
.theadcss {
  font-size: 15px;
  color: #6ed6fb;
}
tbody {
  font-size: 15px;
}
</style>
