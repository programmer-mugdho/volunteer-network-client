import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import './Login.css'

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }

    const handleClick = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                var token = result.credential.accessToken;
                var user = result.user;
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
        <div className='login__body'>
            <img className='login__logo' src={logo} alt="" />
            <div className="login__container">
                <div className="login__inner-container">
                    <h3 className="login__title">Login With</h3>
                    <div onClick={handleClick} className="button_box">
                        <p>Continue with Google</p>
                    </div>
                    <p>Don’t have an account? <span>Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
