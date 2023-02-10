import React from "react";

class MyUncontrolledComponent extends React.Component {

  myInputRef = React.createRef()

  render() {
    console.log("[render]", this.myInputRef)
    return (
        <div>
          <input ref={this.myInputRef}/>
          <button onClick={this.clickHandler}>전송</button>
        </div>
    )
  }

  componentDidMount() {
    console.log("[componentDidMount]", this.myInputRef)
  }

  clickHandler = () => {
    alert(`전송된 값: ${this.myInputRef.current.value}`)
  }
}

export default MyUncontrolledComponent
