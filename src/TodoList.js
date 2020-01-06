import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.showNewTodo = this.showNewTodo.bind(this);
    this.remove = this.remove.bind(this);
  }

  showNewTodo(newTodoItem) {
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
  render() {
    return (
      <div>
        {this.state.todoItems.map(item => (
          <Todo
            key={item.id}
            id={item.id}
            todoData={item.NewTodo}
            removeItem={this.remove}
          />
        ))}
        <NewTodoForm showNewTodoItem={this.showNewTodo} />
      </div>
    );
  }
}

export default TodoList;
