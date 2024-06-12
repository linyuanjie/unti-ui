<template>
  <div id="main" style="height: 100%">
    <div id="header">
      <a-icon type="caret-right" class="rightSan" />
      <span class="title">车辆任务统计</span>
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
            <th>车辆名</th>
            <th>任务数</th>
            <th>平均时间</th>
            <th>异常任务</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in agvTaskResults" :key="String(index)">
            <td>{{ item["agvnum"] }}</td>
            <td>{{ item["taskcount"] }}</td>
            <td>{{ item["avgtime"] }}</td>
            <td>{{ item["alarmtaskcount"] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { GreeterClient } from "../utils/proto/digitaltwins_grpc_web_pb";
import { AgvAgvMapRequest, MockStateInfoRequest } from "../utils/proto/digitaltwins_pb";
import * as echarts from "echarts";
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
    this.callGrpcService();
    setInterval(this.callGrpcService, 10000);
  },
  methods: {
    callGrpcService() {
      const request = new MockStateInfoRequest();
      request.setWorkflownum("2423423434");
      request.setMocktype("2");
      const client = new GreeterClient("https://localhost:5001", null, null);
      client.twinsAgvTaskCount(request, {}, (err, response) => {
        if (err) {
          console.log("Error:", err);
        } else {
          let gridPointData = JSON.parse(JSON.stringify(response.toObject()));
          this.agvTaskResults = gridPointData.agvtaskresultsList;
          console.log("gridPointData", gridPointData);
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
  font-size: 20px;
  padding-left: 0px;
}
.tabledev {
  width: 100%;
  color: aliceblue;
}
.theadcss {
  font-size: 20px;
  color: #6ed6fb;
}
tbody {
  font-size: 20px;
}
</style>
