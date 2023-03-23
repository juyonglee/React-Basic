import UserList from "../components/UserList";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {getUserListWithThunk} from "../redux/actions/GihubAction";

export default function UserListContainer() {

  const userInfos = useSelector(state => {
    return state.github.userList
  })

  const dispatch = useDispatch()

  const getUserInfos = useCallback(async () => {
    dispatch(getUserListWithThunk())
  }, [dispatch])

  return (<UserList userInfos={userInfos} getUserInfos={getUserInfos}/>)
}
