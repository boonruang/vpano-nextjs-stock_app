import { LoginReducer } from '../../types/login.reducer.types'
import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../saga/actionTypes'

const initialState: LoginReducer = {
  result: null,
  token: null,
  username: null,
  isFetching: false,
  isFailed: false,
}

export default (state = initialState, { type, payload }): LoginReducer => {
  switch (type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        result: null,
        isFetching: true,
        isFailed: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: payload.result,
        token: payload.token,
        username: payload.username,
        isFetching: false,
        isFailed: false,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        result: null,
        isFetching: false,
        isFailed: true,
      }
    case LOGOUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
