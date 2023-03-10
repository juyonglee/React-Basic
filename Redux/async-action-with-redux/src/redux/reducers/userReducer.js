import {
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS
} from "../actions/userAction";

const initialState = {
  loading: false,
  userInfos: [],
  error: null
};

export default function userReducer(state = initialState, action) {
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      userInfos: action.userInfos,
      loading: false
    }
  } else if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      userInfos: [],
      loading: false,
      error: action.errorInfo
    }
  }
  return state
}
