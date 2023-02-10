import React from "react";

class MyClassCompExample extends React.Component {

  state = {
    count: 0
  }

  render() {
    const {count} = this.state;
    console.log(count)
    return (
        <div>
          <p>You Clicked {count} times!</p>
          <button onClick={this.clickHandler}>Click Me</button>
        </div>
    )
  }

  clickHandler = (e) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
}

export default MyClassCompExample
