import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./FireBaseConfig";
import { GlobalContext } from "../../App";
import { useHistory } from "react-router";

function LoginPage() {
  const { setIsAuth, setEmail, setUserOrdered } = useContext(GlobalContext);
  const history = useHistory();

  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleSignin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        var user = result.user;
        console.log(user);
        handleSignin(user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });
  };

  var githubProvider = new firebase.auth.GithubAuthProvider();
  const githubSignin = () => {
    firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.

        // The signed-in user info.
        var user = result.user;
        console.log(user);
        handleSignin(user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });
  };

  function handleSignin(email) {
    setEmail({
      email: email,
      role: "",
    });
    setIsAuth(true);
    history.push("/dashborad");
  }

  return (
    <div className="logInPage">
      <button onClick={() => googleSignin()}>Sign In With Google</button>
      <button onClick={() => githubSignin()}>Sign In With GitHub</button>
    </div>
  );
}

export default LoginPage;
