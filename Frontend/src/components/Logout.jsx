import React, { useState } from "react";

export default function Logout({ handleLogout }) {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    window.location.href = '/signin';
    setShowModal(false);
  };


  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Log Out
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Sign Out ?</h2>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleSubmit}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
