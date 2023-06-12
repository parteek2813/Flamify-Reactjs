import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Flamify</span>
          <span className="title"> Register</span>
          <form>
            <input type="text" placeholder="Display Name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input style={{ display: "none" }} type="file" id="file"></input>

            <label htmlFor="file">
              <img src={Add}></img>
              <span>Add an avatar!! Yaa Woo!</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p>You Do have an account? Login!</p>
        </div>
      </div>
    </>
  );
};

export default Register;
