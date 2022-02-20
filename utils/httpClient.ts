import axios from 'axios'
import { kToken } from './constants'
import { getCookie, removeCookie } from './cookie'
import Router from 'next/router'
import actions from '../redux/actions'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL,
})

export const setInterceptor = (dispatch) => {
  httpClient.interceptors.request.use((req) => {
    // const token = localStorage.getItem(kToken)
    const token = getCookie(kToken)
    //NOTE add token
    if (token) req.headers = { 'x-access-token': token }
    return req
  })

  httpClient.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (
        403 === error.response.status ||
        401 === error.response.status ||
        500 === error.response.status
      ) {
        // removeCookie(kToken)
        // Router.push('/login')
        dispatch(actions.logout())
      } else {
        return Promise.reject(error)
      }
    },
  )
}

export default httpClient
