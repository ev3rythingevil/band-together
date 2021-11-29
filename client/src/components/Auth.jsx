import Signup from "./Signup"
import Login from "./Login"
import { useState } from "react"

function Auth({logIn,newUser}){
    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)

    function showLogin(){
        setLogin(!login)
    }

    function showSignup(){
        setSignup(!signup)
       
    }

    return(
        <>
        <h1> Auth Page</h1>
        {login? <><Login logIn={logIn}/> <button type="button" onClick={showLogin}>Collapse</button> </> : <button type="button" onClick={showLogin}>Log In</button>}
        {signup? <> <Signup newUser={newUser}/> <button type='button'onClick={showSignup}>Collapse</button> </> : <button type='button'onClick={showSignup}>Sign Up</button>}

        </>
    )
}

export default Auth