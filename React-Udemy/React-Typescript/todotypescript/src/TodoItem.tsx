import React from "react";
import { todoType } from "./apptype";

type PropsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="taskItem">
      <p>Task: {task.taskName}</p>
      <p>Work Day: {task.workDay}</p>
      <button className="dellBtn" onClick={() => deleteTask(task.taskName)}>
        Sil
      </button>
    </div>
  );
}

export default TodoItem;
