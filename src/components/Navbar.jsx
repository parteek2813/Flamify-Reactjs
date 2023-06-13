import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <span className="logo">QuickChat</span>
        <div className="user">
          {/* {currentUser.photoURL} */}
          <img
            src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          ></img>
          <span>{currentUser.displayName} </span>
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
