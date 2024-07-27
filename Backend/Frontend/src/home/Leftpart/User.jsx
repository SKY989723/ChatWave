import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import img from '../../assets/cat chat.jpg'
const User = ({user}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  // console.log("hii")
  const {socket,onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(user._id)
  return (
    <div className={`hover:bg-slate-600 duration-300 ${
      isSelected ? "bg-slate-700" : ""
    }`}
    onClick={() => setSelectedConversation(user)}>
       <div className='flex px-6 py-2 space-x-4 hover:bg-slate-700 duration-300 cursor-pointer'>
      <div className={`avatar ${isOnline ? "online" : ""}`}>
  <div className="w-12 rounded-full">
    <img className='scale-150' src={img} />
  </div>
</div>
<div className=''>
  <h1 className='font-bold'>{user.name}</h1>
  <span>{user.email}</span>
  </div>
      </div>

    </div>
  )
}

export default User
