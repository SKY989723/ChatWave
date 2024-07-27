import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from "../../context/SocketContext.jsx";
import img from '../../assets/cat chat.jpg'

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log();
  return (
    <div className='flex h-[11vh] space-x-3 items-center justify-center bg-orange-950 hover:bg-gray-700 duration-300'>
      <div className="avatar">
  <div className="w-16 rounded-full">
  <img className='scale-150'src={img} />
  </div>
</div>
<div className='text-white'>
 
    <h1 className='text-xl'>{ selectedConversation.name}</h1>
    {/* <span className='text-sm'>Offline</span> */}
    <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
</div>
    </div>
  )
}

export default Chatuser
