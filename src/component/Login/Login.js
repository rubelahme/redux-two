import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { createProvider } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(createProvider);
  console.log(user);
  const handleGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div className="pt-5 mt-5 text-center">
      <button className="bg-warning " onClick={handleGoogle}>
        Google Login
      </button>
    </div>
  );
};

export default Login;
