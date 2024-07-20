import React, { useState } from "react";
import NoChatRooms from "../../components/chatrooms/NoChatRooms";
import Rooms from "../../components/chatrooms/Rooms";
import Messages from "../../components/chatrooms/Messages";
import { useQuery } from "@apollo/client";
import { useGetChatRoomsQuery } from "../../lib/graphql";

const Dashboard = () => {
  const { data, loading, error } = useGetChatRoomsQuery({
    fetchPolicy: "no-cache",
  });
  const [selectedRoom, setSelectedRoom] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [toggleSidedrawer, setToggleSidedrawer] = useState(false);
  
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
                setSelectedRoom({ id: selectedRoomId, name: selectedRoomName });
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
