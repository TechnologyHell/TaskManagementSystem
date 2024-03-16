import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DeleteTask({ onDeleteTask }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tasks');
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${selectedTask}`);
      onDeleteTask(selectedTask);
      setSelectedTask('');
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Delete Task
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Delete Task</h2>
              <select
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
                className="w-full border rounded py-2 px-3 mb-3"
              >
                <option value="">Select a task...</option>
                {tasks.map((task) => (
                  <option key={task._id} value={task._id}>
                    {task.taskname}
                  </option>
                ))}
              </select>
              <div className="flex justify-end">
                <button
                  onClick={handleDelete}
                  disabled={!selectedTask}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
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
