import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import '../Styles/registrationform.scss'

function RegisterForm(props) {

    const [passwordNotMatching,setPasswordNotMatching] = useState(false);
    const [password,setPassword] = useState("")
    const [passwordTooShort,setPasswordTooShort] = useState(false)
    const [repeatPassword,setRepeatPassword] = useState("")
    const [registrationErrors,setRegistrationErrors] = useState([])

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

    const register = async (e) => {
        e.preventDefault();
        let registrationUser = {
            username : username.current.value,
            password : password,
            firstName : firstname.current.value,
            lastName : lastname.current.value,
            email : email.current.value,
            phoneNumber : phoneNumber.current.value
        }

        const response = await fetch("http://localhost:8080/user/register",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(registrationUser)
        })
        if (response.status == 400) {
            const data = await response.json();
            setRegistrationErrors(data)
        }
        if (response.ok){
            const data = await response.json()
            console.log(data)
        }




    }



    return (
        <div>
            <form className={"login-form"}>
                <h2>Registration</h2>
                {registrationErrors.length > 0 ? registrationErrors.map((error,i) => (
                    <div className="error-msg" key={i}>{error}</div>
                )) : <></>}
                <input type={"text"} placeholder={"User Name"} ref={username} required/>
                {passwordNotMatching ? <div className={"error-msg"}>Passwords Do Not Match</div> : <></>}
                {passwordTooShort ? <div className={"error-msg"}>Password Too Short</div> : <></>}
                <input type={"password"}
                       placeholder={"Password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value) }
                       required/>

                <input type={"password"}
                       placeholder={"Repeat Password"}
                       value={repeatPassword}
                       onChange={(e) => setRepeatPassword(e.target.value)}
                       required/>
                <input type={"text"} placeholder={"First Name"} ref={firstname} required/>
                <input type={"text"} placeholder={"Last Name"} ref={lastname} required/>
                <input type={"email"} placeholder={"Email"} ref={email} required/>
                <input type="number" placeholder="Phone Number" ref={phoneNumber} required/>
                <button className={"login-button"} onClick={register}>Register</button>
                
                <Link to={"/login"} className={"to-register"}> Already Have An Account? Login!</Link>
            </form>
        </div>
    );
}

export default RegisterForm;