import React, {useEffect, useRef, useState} from 'react';
import '../Styles/loginform.scss'
import {Link,useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";


const MyComponent = () => {
    const navigate = useNavigate()
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [wrong,setWrong] = useState(null);
    const [errors,setErrors] = useState([])
    const [cookies,setCookies] = useCookies(["user"])


    const saveToCookies = (data) => {
        setCookies("jwt",data.jwt);
        setCookies("firstname",data.userContact.firstName)
        setCookies("username",data.userContact.username)
        setCookies("lastName", data.userContact.lastName)
        setCookies("email", data.userContact.email)
        setCookies("phoneNumber", data.userContact.phoneNumber)
        navigate("/")
        window.location.reload()
    }

    const login = async (e) =>{
        e.preventDefault();

        let authUser = {
            username : usernameRef.current.value,
            password : passwordRef.current.value
        }
        const response = await fetch("http://localhost:8080/user/login",{
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(authUser)
        })
        if (response.ok){

            const data = await response.json()
            saveToCookies(data)
            setErrors([])
            setWrong(null)
        }else if (response.status == 400){
            const data = await response.json()
            setErrors(data)
            setWrong(null)
        }else if(response.status == 401){
            const data = await response.text()
            setWrong(data)
            setErrors([])
        }
    }

    const checkIfLogged = () =>{
        if (cookies.username != null){
            navigate("/user")
        }
    }

    useEffect(() => {
        checkIfLogged()
    },[])

    return (
        <div>
            <form className={"login-form"}>
                <h2>Login</h2>
                {wrong != null ? <div className="login-error">{wrong}</div> : <></>}
                {errors.length > 0 ? errors.map((error) => (<div className="login-error">{error}</div>)) : <></>}
                <input type={"text"} ref={usernameRef} placeholder="User Name..."/>
                <input type={"text"} ref={passwordRef} placeholder="Password..."/>
                <button className="login-button" onClick={login}>Login</button>
                <Link className={"to-register"} to={"/register"}>Not Registered? Register Now!</Link>
            </form>
        </div>
    );
};

export default MyComponent;
