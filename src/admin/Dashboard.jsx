import React from 'react'
import Sidebar from './Sidebar'
import Hompage from './Hompage'


const Dashboard = () => {

  return (
    <>
     <div className="flex mt-16">

      <Sidebar />

      <Hompage />
     </div>
    </>
  )
}

export default Dashboard