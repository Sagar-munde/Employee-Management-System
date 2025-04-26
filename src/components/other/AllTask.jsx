import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className="bg-[#1c1c1c] p-4 sm:p-6 rounded mt-5">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-5 gap-4 bg-orange-400 p-4 rounded text-center text-sm sm:text-base font-semibold">
        <div>Employee Name</div>
        <div>New Task</div>
        <div>Active Task</div>
        <div>Completed</div>
        <div>Failed</div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border border-emerald-400 p-4 rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm sm:text-base break-words"
          >
            <div className="font-medium">{elem.firstName}</div>
            <div className="text-blue-400">{elem.taskNumbers.newTask}</div>
            <div className="text-yellow-400">{elem.taskNumbers.active}</div>
            <div className="text-white">{elem.taskNumbers.completed}</div>
            <div className="text-red-600">{elem.taskNumbers.failed}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
