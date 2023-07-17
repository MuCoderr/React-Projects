import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./components/style.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <section className="todoapp">
        <Form setTasks={setTasks} tasks={tasks} />
        <List setTasks={setTasks} tasks={tasks} />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/MuCoderr">Mücahit Yasin</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
