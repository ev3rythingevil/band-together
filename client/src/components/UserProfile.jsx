import { useState } from "react"
import ReactPlayer from "react-player"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

function UserProfile({user , setUser}){
    console.log(user)
    const [update, setUpdate] = useState(false)
    const [userData, setUserData] = useState({
        'instruments': null,
         'influences': null,
          'bio':null,
          "song_url":null
    })
    
    
    function updateData(e){
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    function sendUpdate(e){
        e.preventDefault()
    fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then( r => r.json())
    .then(data => {
        setUser(data)
        window.location.reload(false);
        })
    }


    if (!update)

    return(
        <Container className="userProfile">
        <h1>Welcome, {user.username}</h1>
        <h3>Name: {user.firstName} {user.lastName}</h3>
        {/* <img src={user.images} alt={`${user.firstName}'s image'`} /> */}
        <h3>Influences: {user.influences}</h3>
        <h3>Instruments: {user.instruments}</h3>
        <p>{user.bio}</p>
        <ReactPlayer url={`${user.song_url}`}/>
       
        <Button onClick={()=>{setUpdate(!update)}}>Update Profile</Button>
    </Container>
    )

    else 
    return(
        <div>
             <Form onSubmit={e => sendUpdate(e)}>
                <Form.Group className="mb-3" controlID="formUpdateProfile">
                    <Form.Label> Instruments: </Form.Label>
                    <Form.Control type='text' name="instruments" placeholder="Update Instruments" onChange={e => updateData(e)} />

                    <Form.Label> Influences: </Form.Label>
                    <Form.Control type='text' name="influences" placeholder="Update Influences" onChange={e => updateData(e)} />

                    <Form.Label> Bio: </Form.Label>
                    <Form.Control as='textarea' name="bio" placeholder="Update Bio" onChange={e => updateData(e)} />
        
                <Form.Label> SoundCloud URL:</Form.Label>
                    <Form.Control type="text" name="song_url" placeholder="Update SoundCloud" onChange={e => updateData(e)} />
                <Form.Control type='submit' />
            </Form.Group>
            </Form>
            <br />
            <Button onClick={() => { setUpdate(!update) } }>Go Back</Button>

        </div>
    )
}

export default UserProfile