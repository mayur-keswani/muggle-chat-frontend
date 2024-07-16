import React from "react";
import { useNavigate } from "react-router-dom";

const NoChatRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center justify-center gap-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-20 w-20 text-white md:h-28 md:w-28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          ></path>
        </svg>
        <h1 className="text-4xl font-extrabold md:text-6xl">No chats found?</h1>
        <p className="max-w-sm text-xs text-gray-200 md:text-sm">
          Try to initiate chat with your saved contacts by clicking the button
          below
        </p>
      </div>
      <button
        className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
        onClick={() => {
          navigate("/create-chat-room");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="mr-2 h-5 w-5 text-[#121212]"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        Create a chat
      </button>
    </div>
  );
};

export default NoChatRooms;
