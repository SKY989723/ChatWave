
import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../zustand/useConversation.js";
import sound from "../assets/notiRing.wav";
const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessage([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);
};
export default useGetSocketMessage;



// import React from 'react'
// import { useSocketContext } from './SocketContext'

// const useGetSocketMessage = () => {
//     const{}=useSocketContext()
//     const {mess}
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default useGetSocketMessage
