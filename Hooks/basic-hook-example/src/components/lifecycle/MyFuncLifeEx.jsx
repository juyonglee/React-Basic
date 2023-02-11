import React, {useEffect, useState} from "react";

function MyFuncLifeEx() {

  const [state, setState] = useState({
    count: 0
  })

  useEffect(() => {
    console.log("[useEffect] componentDidMount", state.count)
    console.log("state:", state.count)
  }, [])

  useEffect(() => {
    console.log("[useEffect] componentDidMount & componentDidUpdate by count")
    console.log("state:", state.count)
  }, [state.count])

  const clickHandler = (e) => {
    setState(prevState => {
      return {
        count: prevState.count + 1
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

export default MyFuncLifeEx;
