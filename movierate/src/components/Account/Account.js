import { useContext } from "react";
import "./Account.css";
import { AuthContext } from "../../contexts/AuthContext";

export const Account = () => {

    const { userEmail } = useContext(AuthContext)

    return (
        
        <>
            <div className="card">   
                <h3>Personal Info</h3> 
                <ul>
                    <li>Username: {userEmail.split("@")[0]}</li>
                    <li>Email: {userEmail}</li>
                </ul>   
            </div>     
        </>
    
    )
}