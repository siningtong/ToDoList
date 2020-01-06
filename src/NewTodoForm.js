import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import uuid from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { NewTodo: "" };
    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const NewTodoItem = { ...this.state, id: uuid() };
    this.props.showNewTodoItem(NewTodoItem);
    this.setState({ NewTodo: "" });
  }
  inputChange(evt) {
    this.setState({ NewTodo: evt.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input
          id="newTodo"
          value={this.state.NewTodo}
          onChange={this.inputChange}
        ></input>
        <button>ADD TODO</button>
      </form>
    );
  }
}

export default NewTodoForm;
