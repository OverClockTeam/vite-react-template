import { SUCCESS } from '@/app/error_code'
import axios from 'axios'

/**
 * Axios with interceptors for data fetch
 */
const service = axios.create({
  baseURL: '/api/',
  timeout: 4 * 60 * 1000,
})

service.interceptors.request.use(
  (config) => {
    // Add token for request
    // let token = store.getState().auth.token
    // if (token) {
    //   config.headers.set('token', `Bearer ${token}`)
    // }

    if (config.data instanceof FormData) {
      config.headers.set('Content-Type', 'multipart/form-data')
    } else {
      config.headers.set('Content-Type', 'application/json')
    }

    return config
  },
  (error) => {
    // message.error(error.toJSON())
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.data.code === SUCCESS) {
      return response.data.result
    } else {
      return Promise.reject({
        status: 200,
        code: response.data.code,
        msg: response.data.msg,
        data: response.data.result,
      })
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400: {
          // message.error('400 Bad Request')
          break
        }
        case 401: {
          localStorage.clear()
          window.location.href = '/auth/login'
          break
        }
        case 403: {
          localStorage.clear()
          window.location.href = '/auth/login'
          break
        }
        case 404: {
          // message.error('404 Not Found')
          break
        }
        default: {
          // message.error(error.response.status + ' ' + error.response.statusText)
          break
        }
      }
      return Promise.reject({
        status: error.response.status,
        code: error.response.data.code,
        msg: error.response.data.msg,
        data: error.response.data.result,
      })
    } else {
      // message.error(error.message)
      return Promise.reject(error)
    }
  }
)

export default service
