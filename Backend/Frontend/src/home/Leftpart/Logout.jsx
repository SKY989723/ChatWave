import React,{useState} from 'react'
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import Cookies from "js-cookie"
import toast from 'react-hot-toast';
function Logout() {
  const [loading,setLoading]=useState(false);
  const handleLogout=async()=>{
    setLoading(true)
try{
  const res=await axios.post("/api/user/logout");
  localStorage.removeItem("ChatWave");
  Cookies.remove("jwt")
  setLoading(false);
  toast.success("Logged out successfully")
  window.location.reload();
}catch(error){
console.log("Error in Logout",error)
}
  }
  return (
    <div className='h-[8vh]'>
      <div>
      <TbLogout2 className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1'onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default Logout
