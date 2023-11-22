import {useState} from "react"
import ToDo from './ToDo.js';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <div className="addtask">
          <form>
            <input type="text" value={task} onChange={(text) => setTask(text.target.value)}/>
            <input type="submit" value="Add" onClick={(e) => handleSubmit(e)}/>
          </form>
        </div>
        <ol>
          {todos.map((todo) => {
            return <ToDo task={todo} tasks={todos}/>
          })}
        </ol>
      </header>
    </div>
  );
}

export default App;
