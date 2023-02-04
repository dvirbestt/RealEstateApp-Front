import './Styles/App.scss'
import {Link, Route, Routes} from "react-router-dom";
import './Styles/navbar.scss'
import {IoIosMenu,IoMdContact} from 'react-icons/io'
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage.jsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import UserSettings from "./Pages/UserSettings.jsx";
import Home from "./Pages/Home.jsx";
import PostPage from "./Pages/PostPage.jsx";

function App() {

    const [logged,setLogged] = useState(false)
    const [cookies] = useCookies(["user"])

    const checkLogged = () => {
        if (cookies.username != null){
            setLogged(true)
        }
    }

    useEffect(()=> {
        checkLogged()
    })

  return (
    <div className="App">
        <div className="navbar">
            <Link to="/" className={"logo"}>R.E.D</Link>
            <div className="space"></div>
            <div className={"icons-container"}>
                {logged ? <div className={"user-text"}>Hello, {cookies.firstname} </div> : <></>}
                <Link to="/login" ><IoMdContact size={"30px"}></IoMdContact></Link>
                <Link to="" ><IoIosMenu size={"30px"}></IoIosMenu></Link>
            </div>
        </div>

        <div className={"page-content"}>

            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
                <Route path={"/user"} element={<UserSettings/>}/>
                <Route path={"/post/*"} element={<PostPage/>}/>
            </Routes>
        </div>

    </div>
  )
}

export default App
