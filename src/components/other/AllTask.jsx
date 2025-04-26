import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      {/* Header Row */}
      <div className="bg-orange-400 mb-2 py-2 px-4 grid grid-cols-2 sm:grid-cols-5 gap-4 rounded text-center">
        <h2 className="text-base sm:text-lg font-medium">Employee Name</h2>
        <h3 className="text-base sm:text-lg font-medium">New Task</h3>
        <h5 className="text-base sm:text-lg font-medium hidden sm:block">Active Task</h5>
        <h5 className="text-base sm:text-lg font-medium hidden sm:block">Completed</h5>
        <h5 className="text-base sm:text-lg font-medium hidden sm:block">Failed</h5>
      </div>

      {/* Data Rows */}
      <div className="space-y-2">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-400 py-2 px-4 grid grid-cols-2 sm:grid-cols-5 gap-4 rounded text-center items-center"
          >
            <h2 className="text-base sm:text-lg font-medium">{elem.firstName}</h2>
            <h3 className="text-base sm:text-lg font-medium text-blue-400">{elem.taskNumbers.newTask}</h3>
            <h5 className="text-base sm:text-lg font-medium text-yellow-400 hidden sm:block">{elem.taskNumbers.active}</h5>
            <h5 className="text-base sm:text-lg font-medium text-white hidden sm:block">{elem.taskNumbers.completed}</h5>
            <h5 className="text-base sm:text-lg font-medium text-red-600 hidden sm:block">{elem.taskNumbers.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
