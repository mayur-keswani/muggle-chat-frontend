import React, { useState } from "react";
import NoChatRooms from "../../components/chatrooms/NoChatRooms";
import Rooms from "../../components/chatrooms/Rooms";
import Messages from "../../components/chatrooms/Messages";
import { useQuery } from "@apollo/client";
import { useGetChatRoomsQuery } from "../../lib/graphql";


const Dashboard = () => {
  const { data, loading, error } = useGetChatRoomsQuery({fetchPolicy: "no-cache"});
  const [selectedRoom, setSelectedRoom] = useState<{id:string,name:string} | null>(null);


  return (
    <div>
      {loading ? (
        <div>Loading ...</div>
      ) : data?.chat_rooms && data?.chat_rooms?.length > 0 ? (
        <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-start overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
          <Rooms
            rooms={data?.chat_rooms}
            onSelect={(selectedRoomId: string,selectedRoomName:string) => {
              setSelectedRoom({id:selectedRoomId,name:selectedRoomName});
            }}
            selectedRoomId={selectedRoom?.id ?? null}
          />

          {selectedRoom?.id && <div className="h-full w-full md:w-[70%] overflow-hidden px-2"><Messages selectedRoom={selectedRoom} /></div>}
        </div>
      ) : (
        <NoChatRooms />
      )}
    </div>
  );
};

export default Dashboard;
