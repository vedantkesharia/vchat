import React,{useContext} from 'react'
import Add_icon from "../img/add_friend.jpeg"
import Cam from "../img/video.jpeg"
import More from "../img/more_icon.jpeg"  
import Messages from "./Messages"
import Input from "./Input"
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
            <img src={Cam} alt="" />
            <img src={Add_icon} alt="" />
            <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
