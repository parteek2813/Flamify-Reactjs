import React from "react";

const Register = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Flamify</span>
          <span className="logo"> Register</span>
          <form>
            <input type="text" placeholder="Display Name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input type="file"></input>
            <button>Sign Up</button>
          </form>
          <p>You Don't have an account? Login!</p>
        </div>
      </div>
    </>
  );
};

export default Register;
