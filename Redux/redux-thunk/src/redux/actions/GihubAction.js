export const GET_USER_LIST = "GET_USER_LIST"

export function getUserListCreator(userList) {
  return {
    type: GET_USER_LIST,
    userList: userList
  }
}

export function getUserListWithThunk() {
  return async (dispatch) => {
    const res = await fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(userList => userList)
    console.log(res)
    return res
  }
}
