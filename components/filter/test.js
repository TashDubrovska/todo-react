import React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

describe('Filter component', () => {
  const mockFunctions = {
    onClick: () => { },
  };

  let onClickSpy, filter;

  beforeEach(() => { 
    onClickSpy = jest.spyOn(mockFunctions, 'onClick');
    filter = shallow(<Filter onClick={onClickSpy} />)
  });

  afterEach(() => {
    onClickSpy.mockRestore();
  });

  test('should set first filter to All', () => {
    let filterButton = filter.find('ul').childAt(0).find('button');
    filterButton.simulate('click');

    expect(filterButton.text()).toBe('All');
    expect(onClickSpy).toBeCalled();
    expect(onClickSpy).toBeCalledWith('ALL');
  });

  test('should set second filter to Active', () => {
    let filterButton = filter.find('ul').childAt(1).find('button');
    filterButton.simulate('click');

    expect(filterButton.text()).toBe('Active');
    expect(onClickSpy).toBeCalled();
    expect(onClickSpy).toBeCalledWith('ACTIVE');
  });

  test('should set third filter to Completed', () => {
    let filterButton = filter.find('ul').childAt(2).find('button');
    filterButton.simulate('click');

    expect(filterButton.text()).toBe('Completed');
    expect(onClickSpy).toBeCalled();
    expect(onClickSpy).toBeCalledWith('COMPLETED');
  });
});
