export default (todos, text) => {
  if (text) {
    return [...todos, {
      text,
      completed: false,
    }];
  }
  return todos;
};
