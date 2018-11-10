import React from 'react';
import { mount } from 'enzyme';
import 'jsdom-global/register';
import AddTodo from '.';

describe('addTodo component', () => {
  const mockFunctions = {
    onSubmit: () => {},
  };
  let onSubmitSpy, addTodo;

  beforeEach(() => {
    onSubmitSpy = jest.spyOn(mockFunctions, 'onSubmit');
    addTodo = mount(<AddTodo onSubmit={onSubmitSpy} />);
  });

  afterEach(() => {
    onSubmitSpy.mockRestore();
  });

  test('should call onSubmit function when form is submitted', () => {
    addTodo.find('form').simulate('submit');
    
    expect(onSubmitSpy).toBeCalled();
  });

  test('should call onSubmit function with value of input', () => {
    const text = 'Kill all humans';

    addTodo.find('input').instance().value = text;
    addTodo.find('form').simulate('submit');

    expect(onSubmitSpy).toHaveBeenCalledWith(text);
  });

  test('should reset input after submitting', () => {
    addTodo.find('input').instance().value = 'Kill all humans';
    addTodo.find('form').simulate('submit');

    expect(addTodo.find('input').instance().value).toEqual('');
  });
});
