import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import CreateChatRoom from "./pages/create-chat-rooms/CreateChatRoom";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

  return (
    <div className="min-h-screen bg-[#121212]">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/create-chat-room" element={<CreateChatRoom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
