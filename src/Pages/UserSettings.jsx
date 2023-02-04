import React from 'react';
import "../Styles/UserSettings.scss"
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";


function UserSettings() {

    const [cookies,setCookies,removeCookies] = useCookies(["user"])
    const navigate = useNavigate()

    const logout = () => {
        removeCookies("jwt")
        removeCookies("username")
        removeCookies("firstname")
        removeCookies("lastName")
        removeCookies("phoneNumber")
        removeCookies("email")
        navigate("/")
        window.location.reload()
    }

    return (
        <div>
            <button onClick={logout} className={"logout-button"}>Logout</button>
            Hello From User Settings

        </div>
    );
}

export default UserSettings;