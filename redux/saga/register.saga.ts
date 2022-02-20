import { put, call } from 'redux-saga/effects'
import { kResultOk } from '../../utils/constants'
import httpClient from '../../utils/httpClient'
import actions from '../actions'
import Router from 'next/router'

export function* sagaRegister({ payload }: any) {
  try {
    yield put(actions.registerFetching())
    const response = yield call(httpClient.post, '/authen/register', payload)
    const { result } = response.data
    if (result == kResultOk) {
      yield put(actions.registerSuccess({ result: response.data }))
      Router.push('/login')
    } else {
      yield put(actions.registerFailed())
    }
  } catch (error) {
    yield put(actions.registerFailed())
  }
}
