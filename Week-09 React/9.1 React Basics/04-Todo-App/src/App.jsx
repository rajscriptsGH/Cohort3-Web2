
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
      title: document.getElementById('title').value,
      desc: document.getElementById('desc').value,
      done: true
    });
    setTodos(newArray);
  }

  return (
    <div>
      <input id='title' type="text"  placeholder='Title'></input>
      <input id='desc' type="text" placeholder='Desc'></input>
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
