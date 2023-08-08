import "./styles.css"

export default function App () {
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">List</label>
      <input type="text" id="item" />
      <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="header">To Do List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>    <li>
      <label>
        <input type="checkbox" />
        Item 3
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 4
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>    <li>
      <label>
        <input type="checkbox" />
        Item 5
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}