import addTodo from '.';

describe('addTodo', () => {
  const todos = [
    {
      text: 'Get a cat',
      completed: false,
    },
  ];

  test('should add a new todo to the todos list', () => {
    const text = 'Get a box';
    const expected = [...todos, {
      text,
      completed: false,
    }];

    expect(addTodo(todos, text)).toEqual(expected);
  });

  test('should not add a new todo if text string is empty', () => {
    expect(addTodo(todos, '')).toEqual(todos);
  });

  test('should not add a new todo if text is undefined', () => {
    expect(addTodo(todos)).toEqual(todos);
  });

  test('should not add a new todo if text is undefined', () => {
    expect(addTodo(todos, undefined)).toEqual(todos);
  });

  test('should not add a new todo if text is null', () => {
    expect(addTodo(todos, null)).toEqual(todos);
  });
});
