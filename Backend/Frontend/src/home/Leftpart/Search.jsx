import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers.jsx"
import useConversation from '../../zustand/useConversation.js';
import toast from 'react-hot-toast';
function Search() {
  const [search,setSearch]=useState("");
  const [allUsers]=useGetAllUsers();
  const {setSelectedConversation}=useConversation()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("user not found");
    
    }
  };
  return (
    <div className='h-[10vh]'>
        <form onSubmit={handleSubmit}>
            <div className='flex space-x-3 m-2'>

           
{/* i take this search bar component from daisyui tailwind component website */}
     <label className=" border-gray-700 bg-slate-900 rounded-lg p-3 w-[80%] border-[1px] flex items-center gap-2">
  <input type="text" className=" grow outline-none bg-transparent" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)} />
  
</label>
<button>
<FaSearch className='text-5xl text-orange-950 p-2 hover:bg-gray-300 rounded-full duration-300' />
</button>
</div>
      </form>
    </div>
  )
}

export default Search
