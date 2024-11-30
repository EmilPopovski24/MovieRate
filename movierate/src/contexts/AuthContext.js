import { createContext, useContext } from "react";
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
    };

    const onRegisterSubmit = async(data) => {
        const { confirmPassword, ...registerData } = data;
        if(confirmPassword !== registerData.password) {
          alert("Both passwords do not match!")
          return;
        };
    
        try {
            const result = await authService.register(data);
            setAuth(result);     
            alert("Successful registration") 
            navigate('/catalog')
        } catch (error) {
            alert("User with the same details (email or username) already exists!")
        }
    };

    const onLogout = async() => {
        await authService.logout();
        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        token:auth.accessToken,
        userId: auth._id,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken 
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
};

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);
//     return context;
// }