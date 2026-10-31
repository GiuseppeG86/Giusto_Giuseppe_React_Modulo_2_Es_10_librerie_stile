import Input from "../components/Input"

function Register () {
    return (
        <>
        <div className="title">
            <h1>Register</h1>  
        </div>
        <div className="form" >
            <form action="">
                    <Input type="text" id="first_name" placeholder="Mario">Nome</Input>
                    <Input type="email" id="email" placeholder="mariorossi@gmail.com">email</Input>              
                    <Input type="password" id="pass" placeholder="">password</Input>
                    <Input type="password" id="repeat_pass" placeholder="">conferma password</Input>           
                    <button type="submit" >Invia</button>
            </form>  
        </div>   
        </>
    )
}

export default Register