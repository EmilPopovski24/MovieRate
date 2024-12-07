import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
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