import React, { useState } from "react";
import NoChatRooms from "../../components/chatrooms/NoChatRooms";
import Rooms from "../../components/chatrooms/Rooms";
import Messages from "../../components/chatrooms/Messages";

const Dashboard = () => {
  const [chatRooms, setChatRooms] = useState([{}]);

  return (
    <div>
      {chatRooms.length > 0 ? (
        <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
          <Rooms />
          <Messages />
        </div>
      ) : (
        <NoChatRooms />
      )}
    </div>
  );
};

export default Dashboard;
