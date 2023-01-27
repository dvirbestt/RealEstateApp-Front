import React, {useRef} from 'react';
import '../Styles/loginform.scss'
import {Link} from "react-router-dom";


const MyComponent = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const login = (e) =>{
        e.preventDefault();
        console.log(usernameRef.current.value)
    }

    return (
        <div>
            <form className={"login-form"}>
                <h2>Login</h2>
                <input type={"text"} ref={usernameRef} placeholder="User Name..."/>
                <input type={"text"} ref={passwordRef} placeholder="Password..."/>
                <button className="login-button" onClick={login}>Login</button>
                <Link className={"to-register"} to={"/register"}>Not Registered? Register Now!</Link>
            </form>
        </div>
    );
};

export default MyComponent;
