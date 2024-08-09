import React from "react";

function TaskInput({ onAddTask }) {
  let taskInput = "";

  const handleInputChange = (e) => {
    taskInput = e.target.value;
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      taskInput = "";
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a New Task"
        className="border border-gray-300 p-2 rounded-lg w-full mr-2 flex-grow "
      />
      <button
        className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 w-auto"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
