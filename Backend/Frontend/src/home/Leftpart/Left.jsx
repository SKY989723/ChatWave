import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-full  bg-black text-grey-300 text-gray-300 '>
      <Search/>
      <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(81vh - 10vh)"}}>

      <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left
