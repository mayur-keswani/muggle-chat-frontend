import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex w-full h-screen  overflow-y-hidden items-center justify-center">
      <div className="border-purple-500 border-2 flex w-full flex-col items-start justify-start overflow-hidden p-6 sm:max-w-4xl md:w-2/3 lg:px-10">
        <div className="w-full">
          <h1 className="mb-3 text-5xl font-extrabold text-white">Register</h1>
          <p className="text-xs text-slate-400">Create your account</p>
        </div>
        <form className="my-14 flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Username or email</label>
            <input
              placeholder="Enter a username or email..."
              autoComplete="false"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Password</label>
            <input
              placeholder="Enter a password..."
              autoComplete="false"
              type="password"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="mr-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox-2"
              className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
              name="checkbox-2"
            />
            <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
              <svg
                className="pointer-events-none hidden h-3 w-3 fill-current text-white"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#000000"
                    fill-rule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="checkbox-2"
                className="text-sm font-medium text-white"
              >
                Remember me
              </label>
            </div>
          </div>
          <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
            Register
          </button>

          <p className="text-sm font-light text-white">
            Already have an account? &nbsp;
            <Link to={'/login'} className="cursor-pointer font-bold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
