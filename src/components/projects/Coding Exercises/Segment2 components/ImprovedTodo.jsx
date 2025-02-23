import { useState, useEffect } from "react";

const ImprovedTodo = () => {
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage if available
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setIsEditing(true);
    setCurrentTask(tasks[index]);
    setCurrentIndex(index);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((t, index) =>
      index === currentIndex ? currentTask : t
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTask("");
    setCurrentIndex(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-primary mb-3" onClick={addTask}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div className="mt-3">
          <h2>Edit Task</h2>
          <input
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            className="form-control mb-2"
          />
          <button className="btn btn-success" onClick={saveTask}>
            Save Task
          </button>
        </div>
      )}
    </div>
  );
};

export default ImprovedTodo;
