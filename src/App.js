import "./App.css"
import { useState } from "react"
import { ToDoList } from "./components/ToDoList"

const App = () => {
  const [list, setList] = useState({arr: [], value: ""});

  const addToList = (event) => {
    if (event.code === "Enter" || event.target.outerText === "Add Task") {
      let temp = list.arr
      temp.push(list.value)
      setList({arr: temp, value: ""})
      list.value = ""
    }
  }

  const handleChange = (event) => {
    setList({arr: list.arr, value: event.target.value})
  }

  return (
    <div>
      <div className="inputs">
        <input className="input" placeholder="Add task..." type="text" name="item" value={list.value} onChange={handleChange} onKeyPress={addToList} />
        <button className="submit" onClick={addToList}>Add Task</button>
      </div>
      <div>
        <ul className="list">
          <ToDoList list={list} setList={setList}/>
        </ul>
      </div>
    </div>
  )
}

export default App