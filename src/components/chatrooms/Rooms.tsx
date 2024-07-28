import React, { useMemo, useState } from "react";

type ChatRoomType = {
  id: any;
  name: string;
  created_by:string;
  user: {
    username?: string | null;
  }
}
type RoomsPropsType = {
  rooms: ChatRoomType[];
  onSelect: (selectedRoomId: string, selectedRoomName: string,selectedRoomCreatorId:string) => void;
  selectedRoomId: string | null;
};

const Rooms = ({ rooms, onSelect, selectedRoomId }: RoomsPropsType) => {
  const [searchedText, setSearchedText] = useState("");

  const filteredRooms = useMemo(() => {
    if (searchedText)
      return rooms.filter((room) =>
        room.name?.toLowerCase()?.includes(searchedText?.toLocaleLowerCase())
      );
    else return rooms;
  }, [searchedText, rooms]);

  return (
    <>
      <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
        <input
          placeholder="Search chat..."
          value={searchedText}
          onChange={(e) => {
            setSearchedText(e?.target.value);
          }}
          className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
        />
        <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button>
        {/* <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            ></path>
          </svg>
        </button> */}
      </div>
      <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
        {filteredRooms.map((chatRoom: ChatRoomType) => (
          <li
            key={chatRoom.id}
            onClick={() => {
              onSelect(chatRoom.id, chatRoom.name, chatRoom.created_by);
            }}
            className={`w-full cursor-pointer border-b-2 border-purple-200 p-4 ${
              selectedRoomId && selectedRoomId === chatRoom?.id
                ? "bg-slate-800"
                : "bg-[#232323]"
            } hover:bg-slate-800 md:p-6`}
          >
            <div className="flex w-full items-start justify-start gap-3 md:gap-4">
              <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                  <div className="text-lg font-bold text-gray-400">
                    {chatRoom.name}
                  </div>
                  <div className=" text-gray-400">
                    Created By : {chatRoom?.user.username}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Rooms;
