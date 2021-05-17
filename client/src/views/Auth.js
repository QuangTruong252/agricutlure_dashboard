import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import {AuthContext} from '../contexts/AuthContext';
import {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import wave from '../assets/wave.png';
import bg from '../assets/bg.svg';

const Auth = ({authRoute}) => {

    const {authState: {authLoading, isAuthenticated}}= useContext(AuthContext);


    let body;

    if(authLoading) {
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info'>

                </Spinner>
            </div>
        )
    } else if (isAuthenticated) {
        return <Redirect to='/generality'/>
    } else {
        body = (
            <>
            {authRoute === 'login' && <LoginForm />}
            {authRoute === 'register' && <RegisterForm/>}
            </>
        )
    }

    return (
        <div>
        <img className="wave" src={wave} alt="img" />
        <div className="container">
          <div className="img">
            <img src={bg} alt="img" />
          </div>
          <div className="login-content">
            {body}
          </div>
        </div>
        </div>
    )
}

export default Auth;
