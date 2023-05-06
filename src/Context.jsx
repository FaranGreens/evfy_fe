import React, { useState } from "react";

export const myContext = React.createContext();

export default function MyContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <myContext.Provider
      value={{
        isAuth,
        setIsAuth,
        token,
        setToken,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
