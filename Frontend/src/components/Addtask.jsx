import React, { useState } from "react";
import axios from "axios";

export default function AddTask() {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/task", { taskname: taskName })
      .then((res) => {
        setShowModal(false);
        setTaskName("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Add Task</h2>
              <input
                type="text"
                value={taskName}
                onChange={handleInputChange}
                placeholder="Enter task name"
                className="w-full border rounded py-2 px-3 mb-3"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
