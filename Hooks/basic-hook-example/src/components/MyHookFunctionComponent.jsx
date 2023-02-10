import React, {useState} from "react";

function MyHookFunctionComponent() {

  const [state, setState] = useState({
    count: 0
  })

  const clickHandler = (e) => {
    console.log("Click!")
    setState(prevState => {
      const {count} = prevState
      return {
        count: count + 1
      }
    })
  }

  return (
      <div>
        <p>You Clicked {state.count} times!</p>
        <button onClick={clickHandler}>Click Me</button>
      </div>
  )
}

export default MyHookFunctionComponent
