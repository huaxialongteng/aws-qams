import ajax from './ajax'

const baseUrl = '/api/portal/r/w?sid=fd8b4d9e-99e6-45d2-9307-6b87d4b03609&cmd='
const FuncApi = {
  get: function (url, params) {
    return ajax.get((baseUrl + url), params)
  },
  post: function (url, params) {
    return ajax.post((baseUrl + url), params)
  }
}
// 获取结构树(BOM树)
export function getTreeDataApi(params = {}) {
  return FuncApi.get('com.awspaas.user.apps.app202206219731.processTree', params)
}