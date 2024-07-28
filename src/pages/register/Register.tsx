import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../lib/graphql";
import toast from "react-hot-toast";
import Spinner from "../../components/commons/Spinner";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const [registerUser, {loading}] = useRegisterMutation();
  const {updateUser}= useContext(AuthContext)
  const navigate = useNavigate();

  async function onSubmit(e:React.FormEvent){
    try{
      e?.preventDefault()
      const {data} =await registerUser({variables:{username,email,password}});
      if(data?.register?.accessToken){
        const user = data?.register;
        toast.success("Registed Successfully!!");
        updateUser({username:user.username,userId:user.userId,email:user.email,accessToken:user.accessToken,roleType:user.roleType})
        navigate('/')
      }
    }catch(error){
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="flex w-full h-screen  overflow-y-hidden items-center justify-center">
      <div className="border-purple-500 border-2 flex w-full flex-col items-start justify-start overflow-hidden p-6 sm:max-w-4xl md:w-2/3 lg:px-10">
        <div className="w-full">
          <h1 className="mb-3 text-5xl font-extrabold text-white">Register</h1>
          <p className="text-xs text-slate-400">Create your account</p>
        </div>
        <form className="my-14 flex w-full flex-col items-start justify-start gap-4" onSubmit={onSubmit}>
        <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Username</label>
            <input
              placeholder="Enter a username"
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
              autoComplete="false"
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Email</label>
            <input
              placeholder="Enter you email"
              autoComplete="false"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <label className="text-xs text-slate-200">Password</label>
            <input
              placeholder="Enter a password..."
              autoComplete="false"
              type="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
            />
          </div>
          
          <button type="submit" disabled={loading || !username || !password || !email} className="w-full bg-[#ae7aff]  flex flex-row align-middle justify-center p-3 text-center font-bold disabled:cursor-not-allowed text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
            {loading? <Spinner/>:"Register"}
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
