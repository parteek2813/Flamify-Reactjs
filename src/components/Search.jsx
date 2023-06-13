import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null); //no user at the beginning
  const [err, setErr] = useState(null);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      //here response is coming

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  //Here trying to run the query on pressing of the key enter
  //Not using the live suggestion Here :)
  const handleKey = (e) => {
    e.key === "Enter" && handleSearch();
  };

  return (
    <>
      <div className="search">
        <div className="searchForm">
          <input
            type="text"
            placeholder="Search an User"
            onKeyDown={handleKey} //Listen for keyboard action and do actions
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        {err && <span> User not found </span>}
        {user && (
          <div className="userChat">
            <img
              src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <div className="userChatInfo">
              <span>John</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
