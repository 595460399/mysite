import request from './index'
const PATH1 = '/comments'
const PATH2 = '/comment'

function getList(params) {
  return request({
    url: `${PATH1}`,
    method: 'GET',
    params
  })
}

function addInfo(data) {
  return request({
    url: `${PATH2}/add`,
    method: 'POST',
    data
  })
}

export default {
  getList,
  addInfo
}
