import React, { useContext, useEffect, useState } from "react";
import {
  useGetChatRoomMessagesSubscription,
  useSendMessageToChatRoomMutation,
} from "../../lib/graphql";
import Spinner from "../commons/Spinner";
import { AuthContext } from "../../context/AuthContext";

type MessagePropsType = {
  selectedRoom: { id: string; name: string };
  toggleSidedrawer:(e:React.FormEvent)=>void;
};

const Messages = ({ selectedRoom,toggleSidedrawer }: MessagePropsType) => {
  const [content, setContent] = useState("");
  const {user} =useContext(AuthContext)

  const { data, loading: isMessagesLoading } =
    useGetChatRoomMessagesSubscription({
      variables: {
        chatRoomId: selectedRoom?.id,
      },
      fetchPolicy: "no-cache",
    });
  const [sendMessage, { loading: isSendingMessage }] =
    useSendMessageToChatRoomMutation();

  const sendMessageHandler = async (content: string) => {
    try {
      if(!!!content.trim()){
        return
      }
      const { data } = await sendMessage({
        variables: {
          chat_room_id: selectedRoom.id,
          content,
        },
      });
      console.log("message send res", data);
      setContent("");
    } catch (error) {}
  };

  // console.log({ data });
  return (
    <>
      <div className="flex w-full items-center justify-between gap-2 border-b-[1px] p-4">
        <div className="flex w-full items-center justify-start gap-3">
          <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:hidden md:h-10 md:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-purple-700"
              onClick={toggleSidedrawer}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              ></path>
            </svg>
          </button>

          <p className="font-semibold text-white">{selectedRoom?.name}</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
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
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              ></path>
            </svg>
          </button>
          <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
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
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
        <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
          {isMessagesLoading ? (
            <div className="text-slate-300 font-semibold text-base text-center">
              Loading...
            </div>
          ) : data?.messages && data?.messages?.length > 0 ? (
            data?.messages.map((message) => (
              <div
                key={message?.id}
                className={`flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ${
                  message.user_id === user.userId && "ml-auto flex-row-reverse"
                }`}
              >
                <div className="flex w-full max-w-[70%] flex-col gap-2">
                  <div className="flex flex-row justify-start space-x-2 items-center">
                  <p className="text-xs">{message.user_id=== user.userId ? 'you' :message?.user?.username}</p>
                  <p className="text-xs text-gray-500">- {new Date(message.created_at).toLocaleTimeString()}</p>
                  </div> 
                  
                  <div className="relative w-fit bg-[#343434] p-3 text-sm after:absolute after:left-0 after:top-0 after:border-r-[15px] after:border-t-[15px] after:border-r-transparent after:border-t-[#121212]">
                    <div className="flex w-full items-center justify-center px-2">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-slate-300 font-semibold text-base text-center">
              No Messages in room!
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessageHandler(content);
          }}
          className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]"
        >
          <input
            placeholder="Message..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
          />
          <button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              ></path>
            </svg>
          </button>
          <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center p-1 md:h-10 md:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              ></path>
            </svg>
          </button>
          <button
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-transparent text-[#ae7aff] md:h-10 md:w-10"
            onClick={() => {
              sendMessageHandler(content);
            }}
            disabled={isSendingMessage}
          >
            {isSendingMessage ? (
              <Spinner />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-[#ae7aff]"
              >
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
              </svg>
            )}
          </button>
        </form>
      </div>{" "}
    </>
  );
};

export default Messages;
