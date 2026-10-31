import { useContext } from "react"
import { UserContext } from "../context/userContext"

function User(){

    const {user}=useContext(UserContext);

    return (
        <>
        <div className="form">
            <h2>Utente: {user.nome}</h2>
            <h4>E-mail: {user.email}</h4>
        </div>
        </>
    )
}

export default User