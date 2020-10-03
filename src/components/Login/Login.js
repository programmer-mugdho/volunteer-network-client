import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }

    console.log(user);

    const handleClick = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                var token = result.credential.accessToken;
                var user = result.user;
                // console.log(user)
                setUser({ name: user.displayName, email: user.email })
                history.replace(from)
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
