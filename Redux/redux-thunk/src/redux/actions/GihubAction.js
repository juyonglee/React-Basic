export const GET_USER_LIST = "GET_USER_LIST"

export function getUserListCreator(userList) {
  return {
    type: GET_USER_LIST,
    userList: userList
  }
}
