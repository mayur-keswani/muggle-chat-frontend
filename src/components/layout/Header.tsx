import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
    <h1 className="text-xl font-extrabold md:text-3xl">Muggle Discord</h1>
    <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
      <span className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6 text-white md:h-8 md:w-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
        </svg>
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full p-1 text-sm text-white md:h-5 md:w-5 md:text-base">4</span>
      </span>
      <div className="h-11 w-11 rounded-full border-2 border-white">
        <img
          src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar"
          className="h-10 w-10 rounded-full object-cover" />
      </div>
      <button 
        className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex"
        onClick={()=>{
          navigate('/create-chat-room')
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="mr-2 h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clipRule="evenodd"></path>
        </svg>
        Create Chat Room
      </button>
    </div>
  </header>
  )
}

export default Header