import React, { useState, useEffect } from 'react';
import AddTask from '../components/Addtask';
import Logout from '../components/Logout'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function AdminDashboard() {
  
  const [taskData,setTaskData]=useState([]);
  useEffect(()=> {
      fetch("http://localhost:3000/getAllTask", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "task");
          setTaskData(data.data);
        })
  },[]);

  const [userData,setUserData]=useState([]);
  useEffect(()=> {
      fetch("http://localhost:3000/getAllUser", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "user");
          setUserData(data.data);
        })
  },[]);

  const deleteTask = (id,name) => {
    if (window.confirm(`Delete ${name}, Are you sure ?`)) {
      fetch("http://localhost:3000/deleteTask", {
        method: "POST",
        crossDomain: true,
        headers : {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          taskid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
        });
    } else {

    }
  }


  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <h1 className="text-center font-bold px-10 py-10 md:text-4xl lg:text-4xl">
          Welcome to the Admin Dash Panel
        </h1>
        <div className="flex justify-end mb-4 space-x-4">
          <AddTask />
          <Logout />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Users</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-normal text-gray-700">Username</th>
                  <th className="px-4 py-3 text-left text-sm font-normal text-gray-700">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {userData.map(i=>{
                    return(
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4 pl-4">
                          {i.username}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 pl-4">
                          {i.email}
                        </td>
                      </tr>
                    )
                   })}                
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Tasks</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-normal text-gray-700">Task</th>
                  <th className="px-4 py-3 text-left text-sm font-normal text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {taskData.map(i=>{
                    return(
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4 pl-4">{i.taskname}</td>
                        <td> 
                          <FontAwesomeIcon className="whitespace-nowrap px-4 py-4 pl-8"
                            icon={faTrash} 
                            onClick={() => deleteTask(i._id, i.taskname)}
                          />
                        </td>
                      </tr>
                    )
                   })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
