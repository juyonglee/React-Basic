import {GET_USER_LIST} from "../actions/GihubAction";

const userInitState = {
  userList: []
}

export default function userReducer(state = userInitState, action) {
  if (action.type === GET_USER_LIST) {
    return {
      ...state,
      userList: action.userList
    }
  }
  return state
}
