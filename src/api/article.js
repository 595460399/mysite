import request from './index'
const PATH = '/article'
function getList(params) {
  return request({
    url: `${PATH}/getList`,
    method: 'get',
    params
  })
}
export default {
  getList
}
