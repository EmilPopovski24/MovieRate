import { useContext } from "react";
import "./Account.css";
import { AuthContext } from "../../contexts/AuthContext";

export const Account = () => {

    const { userEmail } = useContext(AuthContext)

    return (
        <>
        <h5>Username: {userEmail.split("@")[0]}</h5>
        </>
    )
}