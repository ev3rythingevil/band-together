import Signup from "./Signup"
import Login from "./Login"
import { useState } from "react"
import Button from 'react-bootstrap/Button'

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
        <h1>BandTogether: Log in or Sign Up!</h1>
        {login? <><Login className="btn btn-primary m-2 2 2 2" logIn={logIn}/> <Button type="Button" className="btn btn-primary m-2 2 2 2" onClick={showLogin}>Collapse</Button> </> : <Button className="btn btn-primary m-2 2 2 2" type="Button" onClick={showLogin}>Log In</Button>}
        {signup? <> <Signup className="btn btn-primary m-2 2 2 2" newUser={newUser}/> <Button type='Button' className="btn btn-primary m-2 2 2 2" onClick={showSignup}>Collapse</Button> </> : <Button className="btn btn-primary m-2 2 2 2" type='Button'onClick={showSignup}>Sign Up</Button>}

        </>
    )
}

export default Auth