import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import url from './components/url';
import Loading from './components/Loading';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoBody, setTodoBody] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await url.get('/todos');
        setTodos(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    }
  
    fetchTodos();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const completed = false;
    const newTodo = { userId, id, title: todoBody, completed };
    try {
      const response = await url.post('/todos', newTodo);
      const allTodos = [...todos, response.data];
      setTodos(allTodos);
      setTodoBody('');
      // navigate.push('/')
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      <h1 className="display-3 text-center pt-5"><strong>Todo List</strong></h1>
      {/* <Routes>
        <Route exact path="/post">
          <NewTodo 
            handleSubmit={handleSubmit}
            todoBody={todoBody}
            setTodoBody={setTodoBody}
          />
        </Route>
      </Routes> */}
      <NewTodo />
      { todos ? <TodoList todos={todos} /> : <Loading /> }
    </div>
  );
}

export default App;