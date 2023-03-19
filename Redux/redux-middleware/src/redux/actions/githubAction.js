export const GET_USER_LIST = "GET_USER_LIST"

export function getUserActionCreator(userList) {
  return {
    type: GET_USER_LIST,
    userList: userList
  }
}
