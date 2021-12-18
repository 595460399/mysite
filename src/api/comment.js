import request from './index'
const PATH = '/comments'

function getList(params) {
  return request({
    url: `${PATH}`,
    method: 'GET',
    params
  })
}

function addInfo(data) {
  return request({
    url: `${PATH}`,
    method: 'POST',
    data
  })
}

export default {
  getList,
  addInfo
}
