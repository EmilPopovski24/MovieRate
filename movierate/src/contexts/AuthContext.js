import { Children, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async(loginData) => {
        const result = await authService.login(loginData);
        setAuth(result);
        navigate('/catalog');
        alert('Welcome!')
    }

    const contextValues = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
        auth
    }

    return(
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )

}