import { useState, useEffect } from "react";

const initalInputValues = {
  task: "",
  done: false,
  isEditing: false,
};

function Form({ tasks, setTasks }) {
  const [input, setInput] = useState(initalInputValues);

  useEffect(() => {
    setInput(initalInputValues);
  }, [tasks]);

  const onChangeInput = e => {
    setInput({ ...input, task: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (input.task === "") {
      return false;
    }
    setTasks([...tasks, input]);

    // console.log(input);
    // console.log(tasks);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={input.task}
            onChange={onChangeInput}
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
