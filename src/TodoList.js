import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodoItem) {
    this.setState(preState => ({
      todoItems: [...preState.todoItems, newTodoItem]
    }));
  }
  remove(removedItemId) {
    this.setState(preState => ({
      todoItems: [...preState.todoItems].filter(
        item => item.id !== removedItemId
      )
    }));
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todoItems.map(todoItem => {
      if (todoItem.id === id) {
        return { ...todoItem, task: updatedTask };
      }
      return todoItem;
    });
    this.setState({
      todoItems: updatedTodos
    });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todoItems.map(todoItem => {
      if (todoItem.id === id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });
    this.setState({
      todoItems: updatedTodos
    });
  }
  render() {
    const showTodoItems = this.state.todoItems.map(item => (
      <Todo
        key={item.id}
        id={item.id}
        todoData={item.task}
        completed={item.completed}
        removeItem={this.remove}
        updateItem={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div>
        <ul>{showTodoItems}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
