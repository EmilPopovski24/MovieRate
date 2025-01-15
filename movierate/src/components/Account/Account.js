import { useContext } from "react";
import "./Account.css";
import { AuthContext } from "../../contexts/AuthContext";

export const Account = () => {

    const { username } = useContext(AuthContext)

    return (
        <>
        {username}
        </>
    )
}