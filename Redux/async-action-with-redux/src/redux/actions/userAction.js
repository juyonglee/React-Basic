// Github API Call 시작을 의미합니다.
const GET_USERS_START = "GET_USERS_START"
// Github API Call 성공을 의미합니다.
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
// Github API Call 실패를 의미합니다.
const GET_USERS_FAIL = "GET_USERS_FAIL"

export function getUsersStartActionCreator() {
  return {
    type: GET_USERS_START
  }
}

export function getUsersSuccessActionCreator(userInfos) {
  return {
    type: GET_USERS_SUCCESS,
    userInfos: userInfos
  }
}

export function getUsersFailActionCreator(errorInfo) {
  return {
    type: GET_USERS_FAIL,
    errorInfo: errorInfo
  }
}
