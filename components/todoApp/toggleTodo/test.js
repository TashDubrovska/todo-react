import toggleTodo from '.';

describe('toggleTodo', () => {
  const todos = [
    {
      text: 'Go to Dagobah system',
      completed: true,
    },
  ];

  test('should return the same todos if index is invalid', () => {
    expect(toggleTodo(todos, 3)).toEqual(todos);
  });

  test('should return updated todos if valid index is supplied', () => {
    const expected = JSON.parse(JSON.stringify(todos));
    expected[0].completed = false;

    expect(toggleTodo(todos, 0)).toEqual(expected);
  });
});
