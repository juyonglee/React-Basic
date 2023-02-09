import React from "react";

class MyControlledComponent extends React.Component {
  state = {
    input_value: ""
  }

  render() {
    const inputValue = this.state.input_value;
    return (
        <div>
          <input type="text" value={inputValue} onChange={this.changeHandler}/>
          <button onClick={this.clickHandler}>전송</button>
        </div>
    )
  }

  changeHandler = (e) => {
    this.setState({
      input_value: e.target.value
    })
  }

  clickHandler = () => {
    alert(`전송된 값: ${this.state.input_value}`)
  }
}

export default MyControlledComponent
