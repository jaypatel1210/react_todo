import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { TodoContext } from './context/TodoContext';
import TodoReducer from './context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

import todoImg from './assets/to-do-list.png';

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <div className="float-left">
          <img src={todoImg} className="img-fluid" alt="todo-logo" />
        </div>
        <h1 className="mt-4">Todo App With Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
