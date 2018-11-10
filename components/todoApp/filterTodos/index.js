export default (todos, action) => {
  const visibleTodos = [...todos];

  switch (action) {
    case 'ALL':
      return {
        filter: 'ALL',
        visibleTodos,
      };
    case 'ACTIVE':
      return {
        filter: 'ACTIVE',
        visibleTodos: visibleTodos.filter(todo => !todo.completed),
      };
    case 'COMPLETED':
      return {
        filter: 'COMPLETED',
        visibleTodos: visibleTodos.filter(todo => todo.completed),
      };
    default:
      return { visibleTodos };
  }
};
