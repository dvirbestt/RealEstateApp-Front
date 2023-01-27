import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import '../Styles/registrationform.scss'

function RegisterForm(props) {

    const [passwordNotMatching,setPasswordNotMatching] = useState(false);
    const [password,setPassword] = useState("")
    const [passwordTooShort,setPasswordTooShort] = useState(false)
    const [repeatPassword,setRepeatPassword] = useState("")


    const username = useRef();
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const phoneNumber = useRef();

    const checkPassword = () =>{
        if (password.length < 8 && password.length >= 1){
            setPasswordTooShort(true)
        }else if(password.length >= 8 || password.length <= 2){
            setPasswordTooShort(false)
        }
        if (password.length >= 8 && repeatPassword.length >= 8 && password != repeatPassword){
            setPasswordNotMatching(true)

        }else {
            setPasswordNotMatching(false)

        }
    }

    useEffect(() => {
        checkPassword()
    }, [password,repeatPassword]);

    const registerCheck = () => {

    }



    return (
        <div>
            <form className={"login-form"}>
                <h2>Registration</h2>
                <input type={"text"} placeholder={"User Name"} ref={username}/>
                {passwordNotMatching ? <div className={"error-msg"}>Passwords Do Not Match</div> : <></>}
                {passwordTooShort ? <div className={"error-msg"}>Password Too Short</div> : <></>}
                <input type={"password"}
                       placeholder={"Password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value) }/>

                <input type={"password"}
                       placeholder={"Repeat Password"}
                       value={repeatPassword}
                       onChange={(e) => setRepeatPassword(e.target.value) }
                       />
                <input type={"text"} placeholder={"First Name"} ref={firstname}/>
                <input type={"text"} placeholder={"Last Name"} ref={lastname}/>
                <input type={"email"} placeholder={"Email"} ref={email}/>
                <input type="number" placeholder="Phone Number" ref={phoneNumber}/>
                <button className={"login-button"} onClick={registerCheck}>Register</button>
                
                <Link to={"/login"} className={"to-register"}> Already Have An Account? Login!</Link>
            </form>
        </div>
    );
}

export default RegisterForm;