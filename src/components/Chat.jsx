import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messagess from "./Messagess";
import Input from "./input";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chatInfo">
          <span>Parteek</span>
          <div className="chatIcons">
            <img src={Cam} alt=""></img>
            <img src={Add} alt=""></img>
            <img src={More} alt=""></img>
          </div>
        </div>
        <Messagess />
        <Input />
      </div>
    </>
  );
};

export default Chat;
