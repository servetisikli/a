const marksTodos = [
  {
    title: "read more about js",
    completed: true,
  },
  {
    title: "call a friend",
    completed: false,
  },
  {
    title: "make dinner",
    completed: true,
  },
  {
    title: "watch a movie",
    completed: false,
  },
  {
    title: "go to the grocery shop",
    completed: true,
  },
];
console.log("-----A-----");
function completedTodos(todos) {
  return todos.filter((todo) => todo.completed);
}
console.log(completedTodos(marksTodos));

console.log("-----B-----");
function makeCompleted(todos, title) {
  todos.forEach((todo) => {
    if (todo.title === title) {
      todo.completed = true;
    }
  });
  return todos;
}
console.log(makeCompleted(marksTodos, "call a friend"));

console.log("-----C-----");
function addIds(todos) {
  return todos.map((todo, index) => ({
    ...todo,
    id: index + 1,
  }));
}
console.log(addIds(marksTodos));
