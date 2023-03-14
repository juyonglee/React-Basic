import {useEffect} from "react";

export default function UserList({userInfos, start, fail, success}) {
  useEffect(() => {
    start()
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(userInfo => success(userInfo))
    .catch(error => fail(error))
  }, [start, success, fail])
  
  if (userInfos.length === 0) {
    return <h5>Github User 정보가 존재하지 않습니다.</h5>
  }
  return (
      <ul>
        {
          userInfos.map(user => {
            return (
                <li key={user.id}>
                  <img src={user.avatar_url} alt={user.login}/>
                  <p>{user.login}</p>
                </li>)
          })
        }
      </ul>
  )
}
