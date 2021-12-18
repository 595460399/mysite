import request from './index'
const PATH = '/archives'

function getClassList(params) {
  return request({
    url: `${PATH}/classes`,
    method: 'GET',
    params
  })
}

function getTagList(params) {
  return request({
    url: `${PATH}/tags`,
    method: 'GET',
    params
  })
}

function getArticleList(params) {
  return request({
    url: `${PATH}/articles`,
    method: 'GET',
    params
  })
}

export default {
  getClassList,
  getTagList,
  getArticleList
}
