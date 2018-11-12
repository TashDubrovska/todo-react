import React from 'react';
import { shallow } from 'enzyme';
import Todo from '.';

describe('Todo', () => {
  const text = 'Destroy half of the universe';
  const mockFunctions = {
    onClick: () => {}
  };

  let todo, onClickSpy;

  beforeEach(() => {
    onClickSpy = jest.spyOn(mockFunctions, 'onClick');
    todo = shallow(<Todo text={text} onClick={onClickSpy}/>);
  });

  afterEach(() => {
    onClickSpy.mockRestore();
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

  test('should call onClick function when clicked', () => {
    todo.simulate('click');

    expect(onClickSpy).toBeCalled();
  });
});
