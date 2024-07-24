import React, { useCallback, useContext, useEffect, useState } from "react";
import NoChatRooms from "../../components/chatrooms/NoChatRooms";
import Rooms from "../../components/chatrooms/Rooms";
import Messages from "../../components/chatrooms/Messages";
import { useQuery } from "@apollo/client";
import { useGetChatRoomMessagesSubscription, useGetChatRoomsQuery, useGetJoinedChatRoomsSubscription } from "../../lib/graphql";
import { AuthContext } from "../../context/AuthContext";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const Dashboard = () => {
  const {user} =useContext(AuthContext)
  const { data, loading, error } = useGetChatRoomsQuery({
    fetchPolicy: "no-cache",
  });
  
  const {data:joinedChatRoom} = useGetJoinedChatRoomsSubscription({variables:{user_id:user.userId}})
  
  const [selectedRoom, setSelectedRoom] = useState<{
    id: string;
    name: string;
    isMember:boolean;
  } | null>(null);
  const [toggleSidedrawer, setToggleSidedrawer] = useState(false);
  useEffect(()=>{
    if(joinedChatRoom && joinedChatRoom?.chat_rooms?.length>0 && selectedRoom?.id){
      console.log(joinedChatRoom?.chat_rooms)
      let isMember = joinedChatRoom.chat_rooms.findIndex(room=>room.id===selectedRoom?.id)>=0
      setSelectedRoom({...selectedRoom,isMember})
    }
  },[joinedChatRoom,selectedRoom?.id])
  return (
    <main>
      {loading ? (
        <div>Loading ...</div>
      ) : data?.chat_rooms && data?.chat_rooms?.length > 0 ? (
        <div className="flex h-[calc(100vh-77px)] w-full items-center justify-start overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
          
          <div className={`top-[77px] h-full ${(toggleSidedrawer)?'w-full': (!toggleSidedrawer && selectedRoom?.id) && 'hidden'} border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]`}>
            <Rooms
              rooms={data?.chat_rooms}
              onSelect={(selectedRoomId: string, selectedRoomName: string) => {
                setToggleSidedrawer(false);
                let isMember = false;
                if(joinedChatRoom && joinedChatRoom?.chat_rooms.length>0){
                  isMember = joinedChatRoom.chat_rooms.findIndex(room=>room.id===selectedRoomId)>=0
                }
                setSelectedRoom({ id: selectedRoomId, name: selectedRoomName,isMember });
              }}
              selectedRoomId={selectedRoom?.id ?? null}
            />
          </div>

          {selectedRoom?.id && (
            <div
              className={`h-full ${
                toggleSidedrawer ? "hidden" : 'w-full'
              } md:w-[70%] overflow-hidden px-2`}
            >
              <Messages
                selectedRoom={selectedRoom}
                toggleSidedrawer={(e: React.FormEvent) => {
                  e.preventDefault();
                  setToggleSidedrawer(true);
                }}
                
              />
            </div>
          )}
        </div>
      ) : (
        <NoChatRooms />
      )}
    </main>
  );
};

export default Dashboard;
