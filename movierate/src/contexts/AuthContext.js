import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService";


export const AuthContext = createContext();

export const AuthProvider = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState('auth', {});
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async(loginData) => {
        const result = await authService.login(loginData);
        setAuth(result);
        navigate('/catalog')
        return
    }

    return(
        onLoginSubmit
    )

}