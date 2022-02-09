const NewTodo = ({
  handleSubmit, todoBody, setTodoBody
}) => {
  return (
    <div className="NewTodo container">
      <h1 className="font-weight-light">New Task</h1>
      <form className="newTodoForm" onSubmit={handleSubmit}>
        <input 
          className="form-control"
          type="text" 
          id="todoBody"
          required
          value={todoBody}
          onChange={(e) => setTodoBody(e.target.value)}
        />
      </form>
      <button className="form-control btn btn-primary" type="submit">Add</button>
    </div>
  )
}

export default NewTodo;