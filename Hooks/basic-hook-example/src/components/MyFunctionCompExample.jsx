import React, {useState} from "react";

function MyFunctionCompExample() {

  const [count, setCount] = useState(0)

  const clickHandler = (e) => {
    console.log("Click!")
    setCount(count + 1)
  }

  return (
      <div>
        <p>You Clicked {count} times!</p>
        <button onClick={clickHandler}>Click Me</button>
      </div>
  )
}

export default MyFunctionCompExample
