export default (todos, index) => {
  const newTodos = JSON.parse(JSON.stringify(todos));

  if (index < newTodos.length) {
    newTodos[index].completed = !newTodos[index].completed;
  }

  return newTodos;
};
