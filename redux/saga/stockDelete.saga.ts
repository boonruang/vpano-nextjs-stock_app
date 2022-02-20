import { call } from 'redux-saga/effects'
import { kResultOk } from '../../utils/constants'
import httpClient from '../../utils/httpClient'
import actions from '../actions'

export function* sagaStockDelete({ payload, dispatch }: any) {
  try {
    const response = yield call(httpClient.delete, `/stock/product/${payload}`)
    const { result } = response.data
    if (result == kResultOk) {
      dispatch(actions.feedStockList())
    }
  } catch (error) {
    // Nothing
  }
}
