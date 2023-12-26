import { useEffect, useState } from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    setInputVal(task.name || "");
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: inputVal,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTasklist);
      setTask({});
      setInputVal("");
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: inputVal,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setInputVal("");
    }
  };
  function handleInput(value) {
    setInputVal(value);
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={inputVal}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => handleInput(e.target.value)}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
