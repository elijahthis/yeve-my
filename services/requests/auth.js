import { setAuthToken, setRefreshToken } from '../helpers'
import { request, refreshRequest } from '../axios'
import { toast } from 'react-toastify'

export const signup = async values => {
  try {
    const res = await request.post('users/signup', values)
    setAuthToken(res?.data?.accessToken)
    console.log(res)
    return res?.data
  } catch (err) {
    console.log(err?.response?.data)
    console.log(err?.response?.data?.message)
    throw err
  }
}

export const signin = async values => {
  try {
    const res = await request.post('users/signin', values)
    console.log(res)
    setAuthToken(res?.data?.accessToken)
    setRefreshToken(res?.data?.refreshToken)
    return res?.data
  } catch (err) {
    console.log(err?.response?.data)
    console.log(err?.response?.data?.message)

    throw err
  }
}

export const refresh = async () => {
  try {
    const res = await refreshRequest.post('users/refresh')
    setAuthToken(res?.data?.accessToken)
    return res?.data
  } catch (err) {
    console.log(err?.response?.data)
    console.log(err?.response?.data?.message)
    throw err
  }
}
