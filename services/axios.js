import { BASE_URL } from '../env'
import axios from 'axios'
import { getToken, getRefreshToken } from './helpers'
import { refresh } from './requests/auth'

const options = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json,text/plain,*/*',
    'Content-Type': 'application/json',
  },
}

export const request = axios.create(options)
export const refreshRequest = axios.create(options)

request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error?.response?.data?.statusCode === 401) {
      if (window.location.pathname.startsWith('/admin')) {
        // window.location.replace('/admin/login')
      } else {
        refresh()
        window.location.replace('/login')
      }
    }
    console.log(error.response)
    return Promise.reject(error)
  },
)

//refreshRequest intereceptors
refreshRequest.interceptors.request.use(
  config => {
    const token = getRefreshToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    window.location.replace('/login')
    return Promise.reject(error)
  },
)
