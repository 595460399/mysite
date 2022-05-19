import axios from 'axios'
import { BASE_URL as baseURL, TIME_OUT as timeout } from './config'

const service = axios.create({
  baseURL,
  timeout
})
service.interceptors.request.use(
  (config) => {
    console.log('request config', config)
    return config
  },
  (err) => {
    console.log('request err', err)
    return err
  }
)

service.interceptors.response.use(
  (response) => {
    console.log('response ', response)
    const res = response.data
    console.log('res', res)
    return res
  },
  (err) => {
    console.log('response err', err)
    return err
  }
)

export default service
