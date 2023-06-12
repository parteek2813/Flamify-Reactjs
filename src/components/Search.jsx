import React from "react";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder="Search an User"></input>
        </div>
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          ></img>
          <div className="userChatInfo">
            <span>Liza</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
