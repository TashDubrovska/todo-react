import React from 'react';
import { shallow } from 'enzyme';
import Todo from '.';

describe('Todo', () => {
  const text = 'Destroy half of the universe';

  let todo;

  beforeEach(() => {
    todo = shallow(<Todo text={text} />);
  });

  test('should render text supplied', () => {
    expect(todo.text()).toEqual(text);
  });

  test('should render correct class when not completed', () => {
    expect(todo.prop('className')).toEqual('todo');
  });

  test('should render correct class when completed', () => {
    todo.setProps({
      completed: true,
    });

    expect(todo.prop('className')).toContain('todo--completed');
  });
});
