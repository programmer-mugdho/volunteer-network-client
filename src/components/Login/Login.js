import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext)
    console.log(user);

    const handleClick = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                var token = result.credential.accessToken;
                var user = result.user;
                // console.log(user)
                setUser({ name: user.displayName, email:user.email })
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <button onClick={handleClick}>Google Sign In</button>
        </div>
    );
};

export default Login;