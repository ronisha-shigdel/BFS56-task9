import React from "react";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded-lg shadow-sm"
        >
          <span>{task}</span>
          <button
            onClick={() => onDeleteTask(index)}
            className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
