import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateChatRoomMutation } from "../../lib/graphql";

const CreateChatRoom = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [createChatRoom, { loading }] = useCreateChatRoomMutation();
  const onSubmitHandler = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const {data} = await createChatRoom({
        variables: {
          name,
        },
      });
      
      navigate("/");
    } catch (error) {}
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#121212] bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-0 text-center md:items-center md:p-2">
          <div className="relative w-full transform overflow-hidden border-t-[1px] border-white bg-[#121212] text-left text-white transition-all md:my-8 md:w-full md:max-w-5xl md:border-[1px]">
            <div className="flex items-center justify-between border-b-[1px] border-white p-4">
              <p className="text-xl font-bold">Create Room</p>
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
                <label className="text-xs text-slate-200">Select a user</label>
                <div className="w-full border-[1px] border-white pr-4">
                  <input
                    type="text"
                    placeholder="Enter room name"
                    autoComplete="false"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full bg-[#121212] py-4 pl-4 text-white placeholder:text-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-6">
                <button
                  className="w-full p-3 text-center font-bold shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                >
                  {loading ? "Creating..." : "Create Room"}
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
