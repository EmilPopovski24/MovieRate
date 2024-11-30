import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage"; 
import { authServiceFactory } from "../services/authService";


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth',{});
    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async(data) => {
        const result = await authService.login(data);
        setAuth(result);
        navigate('/catalog');
        alert("You are welcome!")
    }

    const contextValues = {
        onLoginSubmit,
        token:auth.accessToken,
        
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )

}