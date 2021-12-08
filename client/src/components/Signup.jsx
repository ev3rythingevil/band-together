import { useState } from "react"
import Form from 'react-bootstrap/Form'


function Signup({newUser}){
    const [data, setData] = useState({
        'username':'',
         'password':'',
          'firstName':'',
           'lastName': '',
            'email': '',
             'images':'',
             'instruments': '',
              'influences': "",
               'bio': "",
                "song_url":''

    })

    function saveData(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    function submitUser(e){
        e.preventDefault()
        newUser(data)
    }

    return(
        
        <Form onSubmit={e => submitUser(e)}>
        <h3>Signups</h3>
            <Form.Label> Username: </Form.Label>
            <Form.Control type='text' name="username" onChange={e => saveData(e)}/>
            <Form.Label> Password: </Form.Label>
            <Form.Control type='password' name="password" onChange={e => saveData(e)}/>
            <Form.Label> First Name: </Form.Label>
            <Form.Control type='text' name="firstName" onChange={e => saveData(e)}/>
            <Form.Label> Last Name: </Form.Label> 
            <Form.Control type='text' name="lastName" onChange={e => saveData(e)}/>
            <Form.Label> email: </Form.Label>
            <Form.Control type='email' name="email" onChange={e => saveData(e)}/>
            <Form.Label> Images: </Form.Label>
            <Form.Control type='text' name="images" onChange={e => saveData(e)}/>
            <Form.Label> Instruments: </Form.Label>
            <Form.Control type='text' name="instruments" onChange={e => saveData(e)}/>
            <Form.Label> Influences: </Form.Label>
            <Form.Control type='text' name="influences" onChange={e => saveData(e)}/>
            <Form.Label> SoundCloud URL: </Form.Label>
            <Form.Control type='text' name="song_url" onChange={e => saveData(e)}/>
            <Form.Label> Bio: </Form.Label>
            <Form.Control type='text' name="bio" rows='4' cols='30' onChange={e => saveData(e)}/>
            <Form.Control  className="btn btn-primary m-2 2 2 2" type='submit'/>
        </Form>
        
    )
}

export default Signup