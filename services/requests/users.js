import { getToken } from '../helpers'
import { request } from '../axios'

export const getCurrentUser = async () => {
  try {
    const res = await request.get('users/current')
    return res?.data
  } catch (err) {
    console.log(err?.response?.data)
    console.log(err?.response?.data?.message)
    throw err
  }
}
