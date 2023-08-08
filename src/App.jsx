import { useState } from "react"
import "./styles.css"



export default function App () {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()


    setTodos((currentTodos) => {
      return[
       ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false }, 
      ]
    })
      setNewItem("")
  }

  function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
            if (todo.id === id) {
              return {...todo, completed}
            }
              return todo

        })
        }
        )
  }


  return (
  <>
  <form form onSubmit = {handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">List</label>
      <input 
      value = {newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item" />
      <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="header">To do List</h1>
  <ul className="list">
    {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
                <input type="checkbox" check= {todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)}/>
               {todo.title}
             </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        )
    })}
  </ul>
  </>
  )
}