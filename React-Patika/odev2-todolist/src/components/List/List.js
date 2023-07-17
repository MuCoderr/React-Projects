import { useState, useEffect } from "react";

function List({ tasks, setTasks }) {
  const [selectAll, setSelectAll] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleTask = i => {
    const updatedTasks = [...tasks];
    updatedTasks[i].done = !updatedTasks[i].done;
    setTasks(updatedTasks);
  };

  const selectAllTask = () => {
    if (!selectAll) {
      const updatedTasks = tasks.map(task => {
        return { ...task, done: true };
      });
      setTasks(updatedTasks);
      setSelectAll(true);
    } else {
      const updatedTasks = tasks.map(task => {
        return { ...task, done: false };
      });
      setTasks(updatedTasks);
      setSelectAll(false);
    }
  };

  const removeTask = index => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    console.log("task silindi");
  };

  const editTask = i => {
    if (!isEditing) {
      const updatedTasks = tasks.map((task, index) =>
        index === i ? { ...task, isEditing: true } : task
      );
      setTasks(updatedTasks);
      setIsEditing(true);
    } else {
      const updatedTasks = tasks.map((task, index) =>
        index === i ? { ...task, isEditing: false } : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
    }
  };

  const setTask = i => {
    editTask(i);
  };

  const onChangeTask = i => e => {
    const updatedTasks = [...tasks];
    updatedTasks[i].task = e.target.value;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    // console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={selectAllTask}>
          Mark all as complete
        </label>

        <ul className="todo-list">
          {tasks.map((task, i) =>
            task.isEditing ? (
              <input
                key={i}
                value={task.task}
                className="new-todo"
                onChange={onChangeTask(i)}
                onBlur={() => setTask(i)}
                autoFocus
              ></input>
            ) : (
              <li key={i} className={task.done ? "completed" : ""}>
                <div>
                  <input
                    className="toggle"
                    type="checkbox"
                    onClick={() => toggleTask(i)}
                    checked={task.done}
                    readOnly
                  />
                  <label onClick={() => editTask(i)}>{task.task}</label>
                  <button
                    className="destroy"
                    onClick={() => removeTask(i)}
                  ></button>
                </div>
              </li>
            )
          )}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{tasks.length} </strong>
          items left
        </span>
      </footer>
    </div>
  );
}

export default List;
