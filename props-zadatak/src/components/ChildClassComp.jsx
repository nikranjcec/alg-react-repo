import React, { Component } from "react";

export class ChildClassComp extends Component {
  render() {
    return (
      <div>
        <h1>Child class component</h1>
        <p>Grad: {this.props.grad}</p>
      </div>
    );
  }
}

export default ChildClassComp;
