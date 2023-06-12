import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Flamify</span>
          <span className="title"> Login</span>
          <form>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>

            <button>Sign In</button>
          </form>
          <p>You Don't have an account? Register!</p>
        </div>
      </div>
    </>
  );
};

export default Login;
