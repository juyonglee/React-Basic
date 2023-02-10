import React from "react";

class MyClassCompLifeEx extends React.Component {

  state = {
    count: 0
  }

  render() {
    const {count} = this.state;
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

  componentDidMount() {
    console.log("componentDidMount", this.state.count)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", this.state.count)
  }
}

export default MyClassCompLifeEx
