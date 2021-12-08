import { useState } from "react"
import Form from 'react-bootstrap/Form'


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
 
    }
    function sendUserData(e){
        e.preventDefault()
        logIn(loginData)
    }
    return(
        <>
        <Form onSubmit={e => sendUserData(e)}>
        <Form.Label>Login</Form.Label>
            <Form.Control className="m-2 2 2 2 p-2 2 2 2 " type='text' name="username"placeholder="Username" onChange={e => userData(e)} placeholder='username'/>
            <Form.Control className="m-2 2 2 2 p-2 2 2 2 " type='password' name="password" placeholder="Password" onChange={e => userData(e)} placeholder='password'/>
            <Form.Control className="btn btn-primary m-2 2 2 2" type='submit'/>
        </Form>
        </>
    )
}

export default Login