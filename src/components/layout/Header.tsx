import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import avatar from './avatar.jpg'

const Header = () => {
  const { user, onLogout} = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef<null | HTMLDivElement>(null);

  const handleToggle = (e: React.FormEvent) => {
    e?.preventDefault();
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("hidden");
    }
  };

  const logoutHandler = (e:React.FormEvent)=>{
    e?.preventDefault()
    onLogout();
  }

  return (
    <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
      <h1 className="text-xl font-extrabold md:text-3xl">Muggle Discord</h1>
      <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
    
        <button
          className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex"
          onClick={() => {
            navigate("/create-chat-room");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="mr-2 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          Create Chat Room
        </button>
        <div className="relative flex items-center justify-center">
          <button
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleToggle}
          >
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src={avatar}
              alt={user?.username ?? 'profile image'}
            ></img>
          </button>
          <div
            ref={dropdownRef}
            className="z-10 hidden absolute top-10 right-5  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user.username}</div>
              <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <button
                  onClick={logoutHandler}
                  className="block px-4 py-2 w-full h-full bg-transparent font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logout
                </button>
              </li>
             
            </ul>
          </div>

        </div>
        {/* <p>Hello, <span className='text-purple-700'>{user.username}</span></p> */}
      </div>
    </header>
  );
};

export default Header;
