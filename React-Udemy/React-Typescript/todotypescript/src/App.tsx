import React, { ChangeEvent, FC, useState } from "react";
import { todoType } from "./apptype";
import "./App.css";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setWorkDay(Number(e.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter(task => {
        return task.taskName !== nameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="maincard">
        <h3>Add Tasks</h3>
        <input
          className="maincardinput"
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Taskınızı giriniz..."
        />
        <input
          className="maincardinput"
          type="number"
          name="workDay"
          value={workDay}
          onChange={handleChange}
          placeholder="Kaç günde tamamlamalısınız"
        />
        <button className="maincardbutton" onClick={addNewTask}>
          Yeni Task Ekle
        </button>
      </div>
      <div className="taskContainer">
        {todoList.map((task: todoType, i: number) => {
          return <TodoItem task={task} key={i} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
