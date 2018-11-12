import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <li className={`todo${this.props.completed ? ' todo--completed' : ''}`}
        onClick={this.props.onClick}>
        {this.props.text}
      </li>
    )
  }
}
