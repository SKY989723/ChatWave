import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'


function Users() {
  const [allUsers,loading]=useGetAllUsers()
  console.log(allUsers);
  return (
    <div>
      <h1 className='text-white px-8 py-2 bg-orange-950 font-semibold rounded-md'>Massages</h1>
     {/* <div className=' py-2 overflow-y-scroll no-scrollbar-akash ' */}
     <div className=' py-2 overflow-y-auto no-scrollbar-akash'

     style={{maxHeight:"calc(81vh - 10vh)"}}  >
     {allUsers.map((user,index)=>(
      <User key={index} user={user}/>
     ))}
     </div>
    </div>
  )
}

export default Users
