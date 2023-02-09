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
        </div>
    )
  }

  changeHandler = (e) => {
    this.setState({
      input_value: e.target.value
    })
  }
}

export default MyControlledComponent
