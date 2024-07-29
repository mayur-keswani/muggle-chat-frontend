import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateChatRoomMutation,
  useGetChatRoomDetailLazyQuery,
  useUpdateChatRoomMutation,
} from "../../lib/graphql";
import toast from "react-hot-toast";
import Spinner from "../../components/commons/Spinner";

const CreateChatRoom = () => {
  const params = useParams();
  const chatRoomId = params?.id; // Assuming your route is '/items/:itemId'

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [createChatRoom, { loading }] = useCreateChatRoomMutation();
  const [getChatRoomDetail, { loading: isFetchinDetail }] =
    useGetChatRoomDetailLazyQuery();
  const [updateChatRoom, { loading: isUpdating }] = useUpdateChatRoomMutation();

  console.log({ chatRoomId });

  const fetchChatRoomDetail = async (chatRoomId: string) => {
    try {
      const { data } = await getChatRoomDetail({
        variables: {
          id: chatRoomId,
        },
      });
      if (data?.chat_rooms_by_pk?.name) setName(data?.chat_rooms_by_pk?.name);
      else {
        toast.error("Something went wrong!");
        navigate("/");
      }
    } catch (error) {}
  };
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!chatRoomId) {
        await createChatRoom({
          variables: {
            name,
          },
        });
        toast.success(`Chat Room ${name} Created`);
      } else {
        await updateChatRoom({
          variables: {
            id: chatRoomId,
            name,
          },
        });
        toast.success(`Chat Room name changed to ${name} `);
      }

      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    if (chatRoomId) {
      fetchChatRoomDetail(chatRoomId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#121212] bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-0 text-center md:items-center md:p-2">
          <div className="relative w-full transform overflow-hidden border-t-[1px] border-white bg-[#121212] text-left text-white transition-all md:my-8 md:w-full md:max-w-5xl md:border-[1px]">
            <div className="flex items-center justify-between border-b-[1px] border-white p-4">
              <p className="text-xl font-bold">
                {chatRoomId ? "Edit Room" : "Create Room"}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-white"
                role="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <form
              onSubmit={onSubmitHandler}
              className="flex w-full flex-col gap-4 p-4 md:gap-6 md:p-6"
            >
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">
                  Enter chat room name
                </label>
                <div className="w-full border-[1px] border-white">
                  <input
                    type="text"
                    placeholder="Enter room name"
                    autoComplete="false"
                    value={name}
                    disabled={isFetchinDetail}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full bg-[#121212] py-4 pl-4 text-white placeholder:text-gray-500 focus:outline-none disabled:bg-slate-500 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-6">
                <button
                  className="w-full p-3 text-center font-bold border-2 shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || isFetchinDetail || !name}
                  className="flex justify-center items-center w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] disabled:cursor-not-allowed"
                >
                  {loading || isFetchinDetail || isUpdating ? (
                    <Spinner />
                  ) : chatRoomId ? (
                    "Update Room"
                  ) : (
                    "Create Room"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChatRoom;
