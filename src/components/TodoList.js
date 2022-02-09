const TodoList = ({ todos }) => {
  return <ul className="list-group container py-3">
    {todos.map((todo) => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {todo.title}
        <input type='checkbox' checked={todo.completed} />
      </li>
    ))}
  </ul>;
}

export default TodoList;