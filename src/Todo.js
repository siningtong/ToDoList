import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.todoData
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove() {
    this.props.removeItem(this.props.id);
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateItem(this.props.id, this.state.task);
    // this.toggleForm();
    this.toggleForm();
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleUpdate}>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li>{this.props.todoData}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
