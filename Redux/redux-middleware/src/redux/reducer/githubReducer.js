import {GET_USER_LIST} from "../actions/githubAction";

const githubInitState = {
  userList: []
}

export default function githubReducer(state = githubInitState, action) {
  if (action.type === GET_USER_LIST) {
    return {
      ...state,
      userList: action.userList
    }
  }
  return state
}
