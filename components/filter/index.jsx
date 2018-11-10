import React from 'react';

export default class Filter extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <button onClick={() => this.props.onClick('ALL')}>All</button>
        </li>
        <li>
          <button onClick={() => this.props.onClick('ACTIVE')}>Active</button>
        </li>
        <li>
          <button onClick={() => this.props.onClick('COMPLETED')}>Completed</button>
        </li>
      </ul>
    )
  }
};
