import UserList from "../components/UserList";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {
  getUsersFailActionCreator,
  getUsersStartActionCreator,
  getUsersSuccessActionCreator
} from "../redux/actions/userAction";

export default function UserListContainer() {
  const userInfos = useSelector(state => {
    return state.user.userInfos
  })

  const dispatch = useDispatch()

  const getUserInfos = useCallback(async () => {
    dispatch(getUsersStartActionCreator())
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(userInfo => dispatch(getUsersSuccessActionCreator(userInfo)))
    .catch(errorInfo => dispatch(getUsersFailActionCreator(errorInfo)))
  }, [dispatch])

  return (<UserList userInfos={userInfos} getUserInfos={getUserInfos}/>)
}
