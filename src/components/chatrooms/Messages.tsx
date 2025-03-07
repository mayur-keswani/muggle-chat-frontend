import React, {
  useContext,
  useRef,
  useState,
} from "react";
import {
  Messages_Insert_Input,
  useDeleteChatRoomMutation,
  useGetChatRoomMessagesSubscription,
  useJoinChatRoomMutation,
  useSendMessageToChatRoomMutation,
  useUploadAttachmentMutation,
} from "../../lib/graphql";
import Spinner from "../commons/Spinner";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import EmojiPickerComponent from "../emoji-picker/EmojiPickerComponent";
import { useNavigate } from "react-router-dom";
// import {Picker} from 'emoji-mart'
// import 'emoji-mart/css/emoji-mart.css';

type MessagePropsType = {
  selectedRoom: {
    id: string;
    name: string;
    isMember: boolean;
    amICreator: boolean;
  };
  toggleSidedrawer: (e: React.FormEvent) => void;
  onDeleteChatRoom: () => void;
};

const Messages = ({
  selectedRoom,
  toggleSidedrawer,
  onDeleteChatRoom: unSelectedSelectedRoom,
}: MessagePropsType) => {
  const [content, setContent] = useState("");
  const [showEmojisOptions, setShowEmojisOptions] = useState(false);
  const [attachments, setAttachments] = useState<
    { base64: any; filetype: string; filename: string }[]
  >([]);
  const dropdownRef = useRef<null | HTMLDivElement>(null);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { data: messsagesResult, loading: isMessagesLoading } =
    useGetChatRoomMessagesSubscription({
      variables: {
        chatRoomId: selectedRoom?.id,
      },
      fetchPolicy: "no-cache",
    });
  const [sendMessage, { loading: isSendingMessage }] =
    useSendMessageToChatRoomMutation();
  const [joinChatRoom, { loading: isJoining }] = useJoinChatRoomMutation();
  const [deleteChatRoom, { loading: isDeleting }] = useDeleteChatRoomMutation();
  const [uploadAttachment, { loading: isUploading }] =
    useUploadAttachmentMutation();

  const addEmojiHandler = (emoji: any) => {
    setContent((prevContent) => prevContent + emoji);
  };
  const addAttachmentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    console.log({ files });
    if (files && files.length > 0) {
      let iterableFiles = Array.from(files);

      for (let file of iterableFiles) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e && e.target && e.target?.result && typeof e.target?.result ==='string' ) {
            const fileURL = e.target.result;
            console.log({fileURL})
            setAttachments((prevState) =>
              prevState.concat({
                base64: fileURL,
                filename: file.name,
                filetype: file.type,
              })
            );
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const removeAttachmentsHanlder = (index: number) => {
    setAttachments((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const sendMessageHandler = async (
    content: string,
    attachments: { base64: any; filetype: string; filename: string }[]
  ) => {
    let responses;
    let payload: Messages_Insert_Input = {
      chat_room_id: selectedRoom.id,
      content,
    };
    try {
      if (!!!content.trim() && attachments?.length === 0) {
        return;
      }
      if (attachments && attachments?.length > 0) {
        console.log(attachments.length);
        let responses = await Promise.all(
          attachments.map((attachment) => {
            return uploadAttachment({ variables: attachment });
          })
        );
        payload["message_attachments"] = {
          data: responses.map((response) => {
            return {
              url: response.data?.upload.url,
              filename: response?.data?.upload?.filename,
              filetype: response?.data?.upload?.filetype,
            };
          }),
        };
      }
      console.log(responses);

      await sendMessage({
        variables: {
          messages_insert_input: payload,
        },
      });

      setContent("");
      setAttachments([]);
      setShowEmojisOptions(false);
    } catch (error) {
      toast.error(
        "Something went wrong while uploading attachments! Please try again"
      );
    }
  };
  const joinChatRoomHandler = async (chatRoomId: string) => {
    try {
      const { data } = await joinChatRoom({
        variables: {
          chat_room_id: chatRoomId,
        },
      });
      if (data?.insert_user_chat_rooms_one) {
        toast.success(`Joined to ${selectedRoom?.name}`);
      } else {
        toast.error(`Failed to join to ${selectedRoom?.name}`);
      }
    } catch (error) {
      toast.error(`Failed to join to ${selectedRoom?.name}`);
    }
  };
  const deleteChatRoomHandler = async (chatRoomId: string) => {
    try {
      const { data } = await deleteChatRoom({
        variables: {
          id: chatRoomId,
        },
      });
      if (data?.delete_chat_rooms_by_pk) {
        toast.success(`Chat room ${selectedRoom?.name} deleted successfully`);
        unSelectedSelectedRoom();
      } else {
        toast.error(`Failed to delete ${selectedRoom?.name}. Try again later!`);
      }
    } catch (error) {
      toast.error(`Failed to delete ${selectedRoom?.name}. Try again later!`);
    }
  };

  console.log({ messsagesResult });
  return (
    <>
      <div className="flex w-full items-center justify-between gap-2 border-b-[1px] p-4">
        <div className="flex w-full items-center justify-start gap-3">
          {/* Toggle sidedrawer : Rooms section */}
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

        {/* Room Update/Delete menu options */}
        {selectedRoom?.amICreator && (
          <div className="relative flex items-center justify-end gap-4">
            <button
              onClick={() => {
                if (dropdownRef.current) {
                  dropdownRef.current.classList.toggle("hidden");
                }
              }}
              className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10"
            >
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

            <div
              ref={dropdownRef}
              className="z-10 hidden absolute top-10 right-5  bg-slate-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="avatarButton"
              >
                <li>
                  <button
                    onClick={() => {
                      navigate(`/create-chat-room/${selectedRoom?.id}`);
                    }}
                    disabled={isDeleting}
                    className="block px-4 py-2 w-full h-full text-purple-600  font-bold hover:bg-slate-900 "
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      deleteChatRoomHandler(selectedRoom?.id);
                    }}
                    disabled={isDeleting}
                    className="block px-4 py-2 w-full h-full text-red-600  font-bold hover:bg-slate-900 "
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
        {/* messages */}
        <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
          {isMessagesLoading ? (
            <div className="text-slate-300 font-semibold text-base text-center">
              Loading...
            </div>
          ) : messsagesResult?.messages &&
            messsagesResult?.messages?.length > 0 ? (
            messsagesResult?.messages.map((message) => (
              <div
                key={message?.id}
                className={`flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ${
                  message.user_id === user.userId && "ml-auto flex-row-reverse"
                }`}
              >
                <div className="flex w-full max-w-[70%] flex-col gap-2">
                  <div className="flex flex-row space-x-2 justify-end items-center">
                    <p className="text-xs">
                      {message.user_id === user.userId
                        ? "you"
                        : message?.user?.username}
                    </p>
                    <p className="text-xs text-gray-500">
                      - {new Date(message.created_at).toLocaleTimeString()}
                    </p>
                  </div>

                  {message.content && <div className="relative  bg-[#343434] p-3 text-sm flex w-full items-center justify-end px-2 after:absolute after:left-0 after:top-0 after:border-r-[15px] after:border-t-[15px] after:border-r-transparent after:border-t-[#121212]">
                    {message.content}
                  </div>}
                  {message.message_attachments.length > 0 && (
                    <div>
                      <div className="grid w-full grid-cols-2 grid-flow-row-dense order-last items-end justify-end gap-1 md:max-w-[90%] md:gap-2 ml-auto" dir="rtl">
                        {message.message_attachments.map((attachment) => {
                          return (
                            <img
                              className="flex aspect-video w-full flex-shrink-0 object-cover"
                              src={attachment.url}
                              alt={attachment.filename}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-slate-300 font-semibold text-base text-center">
              No Messages in room!
            </div>
          )}
        </div>

        {/* Attachments */}
        {attachments?.length > 0 && (
          <div className="absolute bottom-[53px] left-0 md:bottom-[90px] h-[150px] w-full p-2 md:mr-4 rounded-t-xl rounded-b-3xl bg-gray-800">
            <span className="text-gray-500">Attachments</span>
            <div className="flex justify-center items-start flex-row gap-2 h-full w-full overflow-auto">
              {attachments.map((attachment, index) => {
                return (
                  <div className="relative inline-block h-2/3 min-w-[100px]">
                    <button
                      type="submit"
                      className="right-0 bg-purple-600 px-2 py-1 rounded-l-sm text-white  absolute"
                      disabled={isUploading || isSendingMessage}
                      onClick={() => {
                        removeAttachmentsHanlder(index);
                      }}
                    >
                      <span>&times;</span>
                    </button>
                    <img
                      className="object-cover h-full w-full"
                      src={attachment.base64}
                      alt={attachment.filename}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Input */}
        {selectedRoom?.isMember || selectedRoom?.amICreator ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessageHandler(content, attachments);
            }}
            className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]"
          >
            <EmojiPickerComponent
              open={showEmojisOptions}
              onEmojiClick={(emojiData, event) => {
                console.log({ event, emojiData });
                addEmojiHandler(emojiData?.emoji);
              }}
            />

            <input
              placeholder="Message..."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
            />

            {/* EMOJI */}
            <button
              onClick={() => {
                setShowEmojisOptions((prevState) => !prevState);
              }}
              className="h-7 w-7 flex items-center justify-center p-1 md:flex md:h-10 md:w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                ></path>
              </svg>
            </button>

            {/* ATTACHMENT */}
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center p-1 md:h-10 md:w-10">
              <input
                id="attachmentInput"
                className="hidden"
                type="file"
                multiple
                disabled={isUploading || isSendingMessage}
                accept=".jpeg, .png, .jpg"
                onChange={addAttachmentsHandler}
              ></input>
              <label htmlFor="attachmentInput">
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
              </label>
            </div>

            {/* SEND MESSAGE */}
            <button
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-transparent text-[#ae7aff] md:h-10 md:w-10"
              type="submit"
              disabled={isSendingMessage || isUploading}
            >
              {isSendingMessage || isUploading ? (
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
        ) : (
          <div className="sticky top-full flex w-full items-center justify-around text-gray-400 gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]">
            Joined the Chat room to send message
            <button
              className="w-max items-center justify-center border-[1px] border-purple-600 p-3 text-center font-bold text-white md:inline-flex"
              onClick={() => {
                joinChatRoomHandler(selectedRoom.id);
                // navigate('/join-chat-room')
              }}
            >
              {isJoining ? <Spinner /> : "Join Chat Room"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
