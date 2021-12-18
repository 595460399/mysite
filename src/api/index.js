import axios from 'axios'
const baseURL = 'http://192.168.100.108:5000'
const service = axios.create({
  baseURL,
  timeout: 2000
})
service.interceptors.request.use(
  (config) => {
    // console.log('request config', config)
    return config
  },
  (err) => {
    // console.log('request err', err)
    return err
  }
)

service.interceptors.response.use(
  (response) => {
    // console.log('response ', response)
    const res = response.data
    console.log('res', res)
    return res
  },
  (err) => {
    // console.log('response err', err)
    return err
  }
)

export default service
