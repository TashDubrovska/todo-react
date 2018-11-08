import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList', () => {
  const todos = [
    {
      text: 'Hello darkness my old friend',
      completed: false,
    },
    {
      text: 'I come to talk to you again',
      completed: false,
    }
  ];

  let todoList;

  beforeEach(() => {
    todoList = shallow(<TodoList todos={todos} />);
  });

  test('should render correct number of children', () => {
    expect(todoList.find('ul').children()).toHaveLength(todos.length);
  });

})