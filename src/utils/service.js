import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 1000 * 20, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request 拦截器
service.interceptors.request.use(
  config => {
    if(config.method != 'post') return config
    // post请求格式化参数
    let data = ''
    for (let it in config.data) {
      data += '&' + encodeURIComponent(it) + '=' + encodeURIComponent(config.data[it])
    }
    config.data = data;
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    if (!error) return
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default {
  get(url, config) {
    return new Promise((resolve, reject) => {
      service.get(url, config).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      service.post(url, data, config).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  put(url, data, config) {
    return new Promise((resolve, reject) => {
      service.put(url, data, config).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete(url, data, config) {
    return new Promise((resolve, reject) => {
      service.delete(url, data, config).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}