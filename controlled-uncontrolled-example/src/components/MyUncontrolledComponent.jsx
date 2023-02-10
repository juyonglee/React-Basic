import React from "react";

class MyUncontrolledComponent extends React.Component {
  render() {
    return (
        <div>
          <input id="my-input"/>
          <button onClick={this.clickHandler}>전송</button>
        </div>
    )
  }

  clickHandler = () => {
    const inputEL = document.getElementById("my-input")
    alert(`전송된 값: ${inputEL.value}`)
  }
}

export default MyUncontrolledComponent
