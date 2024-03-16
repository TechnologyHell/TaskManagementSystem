import React, {Component, useEffect, useState} from 'react'
import Logout from '../components/Logout'

export  default function userDashboard() {
    const [data,setData]=useState([]);
  useEffect(()=> {
      fetch("http://localhost:3000/getAllTask", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "task");
          setData(data.data);
        })
  },[]);


  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
      
      <h1 className="text-center font-bold px-10 py-10 md:text-4xl lg:text-4xl" >Welcome to the User Dashboard </h1>
      <div className="flex justify-end mb-4 space-x-4">
          <Logout />
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-10 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-5 text-left text-sm font-normal text-gray-700 pl-20"
                      >
                        Task
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-5 text-left text-sm font-normal text-gray-700 pl-10"
                      >
                        Submit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                   {data.map(i=>{
                    return(
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4 pl-20">{i.taskname}</td>
                        <td>
                        <button
                          type="button"
                          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
                        >
                        Mark as Complete
                        </button>
                        </td>
                      </tr>
                    )
                   })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>  
        </div>
      </section>
    </>
  )
}
