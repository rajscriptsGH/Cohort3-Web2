
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      desc: "Hit the gym regurarly",
      done: false
    },
  ]);

  function addTodo(){
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: "Go for walk",
      desc: "Go for walk regurarly",
      done: true
    });
    setTodos(newArray);
  }

  return (
    <div>
      <input type="text"  placeholder='Title'></input>
      <input type="text" placeholder='Desc'></input>
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
