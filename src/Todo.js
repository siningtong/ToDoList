import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeItem(this.props.id);
  }
  render() {
    return (
      <div style={{ width: 50, height: 50 }}>
        <div>{this.props.todoData}</div>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}

export default Todo;
