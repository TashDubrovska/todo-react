import filterTodos from '.';

describe('filterTodos', () => {
  const visibleTodos = [
    {
      text: 'Build more test chambers',
      completed: true,
    },
    {
      text: 'Wake up Chell',
      completed: false,
    },
  ];


  test('should return the same visible todos if invalid filter is supplied', () => {
    expect(filterTodos(visibleTodos, 'INVALID FILTER')).toEqual({ visibleTodos });
  });

  test('should return the same visible todos if ALL filter is supplied', () => {
    const expected = {
      filter: 'ALL',
      visibleTodos,
    };

    expect(filterTodos(visibleTodos, 'ALL')).toEqual(expected);
  });

  test('should return only active todos if ACTIVE filter is supplied', () => {
    const expected = {
      filter: 'ACTIVE',
      visibleTodos: visibleTodos.filter(todo => !todo.completed),
    };

    expect(filterTodos(visibleTodos, 'ACTIVE')).toEqual(expected);
  });

  test('should return only completed todos if COMPLETED filter is supplied', () => {
    const expected = {
      filter: 'COMPLETED',
      visibleTodos: visibleTodos.filter(todo => todo.completed),
    };

    expect(filterTodos(visibleTodos, 'COMPLETED')).toEqual(expected);
  });
});
