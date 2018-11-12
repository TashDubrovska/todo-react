import React from 'react';
import Todo from '../todo/'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className='todoList'>
        {
          this.props.todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => this.props.onClick(index)} />
          ))
        }
      </ul>
    );
  }
}
