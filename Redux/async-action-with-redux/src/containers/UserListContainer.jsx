import UserList from "../components/UserList";
import {useSelector} from "react-redux";

export default function UserListContainer() {
  const userInfos = useSelector(state => state.user.data)
  return <UserList userInfos={userInfos}/>
}
