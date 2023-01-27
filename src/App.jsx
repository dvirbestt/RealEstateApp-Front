import './Styles/App.scss'
import {Link, Route, Routes} from "react-router-dom";
import './Styles/navbar.scss'
import {IoIosMenu,IoMdContact} from 'react-icons/io'
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage.jsx";

function App() {


  return (
    <div className="App">
        <div className="navbar">
            <Link to="" className={"logo"}>R.E.D</Link>
            <div className={"icons-container"}>
                <Link to="/login" ><IoMdContact size={"30px"}></IoMdContact></Link>
                <Link to="" ><IoIosMenu size={"30px"}></IoIosMenu></Link>
            </div>
        </div>
        <div className={"page-content"}>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
            </Routes>
        </div>

    </div>
  )
}

export default App
