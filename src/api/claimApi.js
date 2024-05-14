import { axios } from "@/utils/request";
const api = { parts: "/payment" };

export function queryList(parameter) {
  return axios({
    url: "/maintenance/list",
    method: "get",
    params: parameter,
  });
}

export function claimWithdraw(parameter) {
  return axios({
    url: "/maintenance/withdraw",
    method: "post",
    data: parameter,
  });
}
