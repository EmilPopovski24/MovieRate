import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState('auth', {});

    const onLoginSubmit = async(loginData) => {
        navigate('/catalog')
        return
    }

    return(
        onLoginSubmit
    )

}