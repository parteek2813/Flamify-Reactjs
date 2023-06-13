import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext;

export const AuthContextProvider = ({ children }) => {
  // in starting , there are no user, unless someone logged in then there are.!
  const [currentUser, setcurrentUser] = useState({});

  //After the page Rendering completes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
  }, []);
};
