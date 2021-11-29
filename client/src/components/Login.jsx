import { useState } from "react"

function Login({logIn}){
    
    const [loginData, setLoginData] = useState({
        "username":"",
        "password":""
    })
    
    function userData(e){
        setLoginData({ ...loginData,
            [e.target.name]:e.target.value
        }
        )
        console.log(loginData)
    }
    function sendUserData(e){
        e.preventDefault()
        logIn(loginData)
    }
    return(
        <>
        <form onSubmit={e => sendUserData(e)}>
            <input type='text' name="username" onChange={e => userData(e)} placeholder='username'/>
            <input type='password' name="password" onChange={e => userData(e)} placeholder='password'/>
            <input type='submit'/>
        </form>
        <h1>Login</h1>
        </>
    )
}

export default Login