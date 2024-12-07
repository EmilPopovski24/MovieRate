import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";


export const Logout = () => {

    const { onLogout } = useContext(AuthContext);
    const navigate = useNavigate()
    onLogout()
    navigate("/login")
    return 
}