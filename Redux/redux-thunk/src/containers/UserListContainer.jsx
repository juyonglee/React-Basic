import UserList from "../components/UserList";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {getUserListCreator} from "../redux/actions/GihubAction";

export default function UserListContainer() {

  const userInfos = useSelector(state => {
    return state.github.userList
  })

  const dispatch = useDispatch()
  console.log(userInfos)
  const getUserInfos = useCallback(async () => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(userInfo => dispatch(getUserListCreator(userInfo)))
  }, [dispatch])

  return (<UserList userInfos={userInfos} getUserInfos={getUserInfos}/>)
}
