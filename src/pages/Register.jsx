import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    //for declaring a single image we does files[0] if in case multiple img selected
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // await setDoc(doc(db, "userChats", res.user.id), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> Flamify</span>
          <span className="title"> Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Display Name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input style={{ display: "none" }} type="file" id="file"></input>

            <label htmlFor="file">
              <img src={Add}></img>
              <span>Add an avatar!! Yaa Woo!</span>
            </label>
            <button>Sign Up</button>
            {err && <span>Something went wrong :/ </span>}
          </form>
          <p>You Do have an account? Login!</p>
        </div>
      </div>
    </>
  );
};

export default Register;
