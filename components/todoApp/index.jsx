import React from 'react';
import AddTodo from '../addTodo';
import TodoList from '../todoList';
import Filter from '../filter';
import filterTodos from './filterTodos';
import addTodo from './addTodo';

export default class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: 'ALL',
      todos: [
        {
          text: 'Ohai Mark',
          completed: true
        }
      ]
    };

    this.state.visibleTodos = this.state.todos;

    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  addTodoHandler(text) {
    this.setState(state => {
      const todos = addTodo(state.todos, text);

      return Object.assign({}, { todos }, filterTodos(todos, state.filter));
    });
  }

  filterHandler(filter) {
    this.setState(state => filterTodos(state.todos, filter));
  }

  render() {
    return (
      <div>
        <AddTodo onSubmit={this.addTodoHandler} />
        <Filter onClick={this.filterHandler} />
        <TodoList todos={this.state.visibleTodos} />
      </div>
    );
  }
}
