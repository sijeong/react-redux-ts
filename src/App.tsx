import React from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer';


const App:React.FC<{}> = () => {
  return (
    <>
      <h1>React Redux Typescript</h1>
      <TodoContainer />
    </>
  )
}

export default App;
