import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { RoleType } from "../lib/graphql";

type AuthContextType = {
  user: InitialUserType;
  updateUser: (payload: {
    userId: string;
    username: string;
    email: string;
    roleType: RoleType;
    accessToken: string;
  }) => void;
};
type InitialUserType = {
  userId: null | string;
  username: string | null;
  email: string | null;
  roleType: RoleType | null;
  accessToken: string | null;
  isLoggedIn: boolean;
};
let InitialUserValue = {
  userId: null,
  username: null,
  email: null,
  roleType: null,
  accessToken: null,
  isLoggedIn: false,
};

export const AuthContext = createContext<AuthContextType>({
  user: InitialUserValue,
  updateUser: (payload: {
    username: string;
    email: string;
    roleType: RoleType;
    accessToken: string;
  }) => {},
});

const AuthProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<InitialUserType>(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      let parsedAuth = JSON.parse(storedAuth);
      return { ...parsedAuth, isLoggedIn: true };
    } else {
      return InitialUserValue;
    }
  });

  function onLogout() {
    setUser(InitialUserValue);
  }

  function updateUser(payload: {
    userId: string;
    username: string;
    email: string;
    roleType: RoleType;
    accessToken: string;
  }) {
    
    localStorage.setItem(
      "auth",
      JSON.stringify({
        userId: payload.userId,
        username: payload.username,
        email: payload.email,
        roleType: payload.roleType,
        accessToken: payload.accessToken,
      })
    );
    setUser((prevValue) => ({
      ...prevValue,
      userId: payload.userId,
      username: payload.username,
      email: payload.email,
      roleType: payload.roleType,
      accessToken: payload.accessToken,
      isLoggedIn: true,
    }));
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
