import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // in starting , there are no user, unless someone logged in then there are.!
  const [currentUser, setcurrentUser] = useState({});

  //After the page Rendering completes
  useEffect(() => {
    const ubsub = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      console.log(user);
    });

    //clean up for memroy leaking
    return () => {
      ubsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
