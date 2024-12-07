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
    };

    const onRegisterSubmit = async(data) => {

        const { confirmPassword, ...registerData } = data;
        if(confirmPassword !== registerData.password) {
          alert("Both passwords do not match!")
          return;
        };
    
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            alert("Succesful registration");
            navigate("/catalog")
        } catch(error) {
            alert("User with the same details (email or username) already exists!")
        }    
    }

    const onLogout = async() => {
        await authService.logout()
        setAuth({});
        navigate('/login')
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken
    }

    return(
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )

}