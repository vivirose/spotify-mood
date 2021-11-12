import React from "react";
import './Login.css';
import { loginUrl } from '../Spotify/spotify' 

function Login(){
    return (
    <div className='Login'>
        <a className='Login__link' href={loginUrl}>LOGIN</a>
    </div>
    )
}

export default Login;