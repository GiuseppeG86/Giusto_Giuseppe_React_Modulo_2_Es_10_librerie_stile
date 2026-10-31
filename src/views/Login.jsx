import { useContext, useState } from "react"
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext"
import Input from "../components/Input"

function Login () {

    const {changeUser}=useContext(UserContext);
    const redirect = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        
        if(e.target[0].value != "" && e.target[1].value != "") {
            changeUser({ 'nome' : e.target[1].value, 'email' : e.target[2].value});
            redirect('/');
        } else {
            alert("I campi non sono compilati correttamente")
        }
    }
    
    return (
        <>
        <div className="flex justify-center">
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Nome</label>
                <input type="text" className="input validator" placeholder="Mario" required />
                <p className="validator-hint hidden">Required</p>
              </fieldset>

              <label className="fieldset">
                <span className="label">Email</span>
                <input type="email" className="input validator" placeholder="mariorossi@gmail.com" required />
                <span className="validator-hint hidden">Required</span>
              </label>

              <button className="btn btn-neutral mt-4" type="submit">Login</button>
              <button className="btn btn-ghost mt-1" type="reset">Reset</button>
            </form>  
        </div>
  
        </>
    )
}

export default Login