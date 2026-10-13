import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    const trimmedTask = newTask.trim();

    if (trimmedTask === "") return;

    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };
  const taskList = tasks.map((task, index) => (
    <li key={index}>
      {" "}
      <span className="task-text">{task}</span>
      <div className="task-buttons">
        <button className="btn-up" onClick={() => moveUp(index)} title="Move Up">↑</button>
        <button className="btn-down" onClick={() => moveDown(index)} title="Move Down">↓</button>
        <button className="btn-delete" onClick={() => deleteTask(index)} title="Delete">🗑️</button>
      </div>
    </li>
  ));

  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));

    // i is the one tracked by filter() and index is the one passed to deleteTask() which is the key of that specific list item
  };

  const moveUp = (index) => {
    if (index <= 0) return;

    setTasks((t) => {
      const updatedTasks = [...t];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];

      // [a,b]=[b,a]
      // this line puts b in a and a in b.corresponding values from right to left.saves us from creating a temp variable

      return updatedTasks;
    });
  };
  const moveDown = (index) => {
    if (index >= tasks.length - 1) return;

    setTasks((t) => {
      const updatedTasks = [...t];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];

      return updatedTasks;
    });
  };

  return (
    <>
      <div className="to-do-list-container">
      <h1>To-Do List</h1>
      <input
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        type="text"
        placeholder="Enter a task..."
        value={newTask}
      />
      <button className="btn-add" onClick={addTask}>Add task</button>
      <ul>{taskList}</ul>
      </div>
    </>
  );
}
export default ToDoList;
