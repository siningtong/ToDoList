import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import uuid from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const NewTodoItem = { ...this.state, id: uuid(), completed: false };
    this.props.createTodo(NewTodoItem);
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input
          type="text"
          id="newTodo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>ADD TODO</button>
      </form>
    );
  }
}

export default NewTodoForm;
