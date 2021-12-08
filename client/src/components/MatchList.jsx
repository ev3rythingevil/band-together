import { useState } from "react"
import {Container, Row, Col, Form} from 'react-bootstrap'

function MatchList({ c, user}){
    
    const [showChat, setShowChat] = useState(false)
    const [formData, setFormData] = useState({
        "user_id":`${user.id}`,
        "body" : "",
        "conversation_id": `${c.id}`
    })
   
   function formSet(e){
       setFormData({
           ...formData,
           [e.target.name]:e.target.value
       })
   }
   
    function chat(){
        setShowChat(!showChat)
        console.log(c)
    }

    function sendMessage(e){
        e.preventDefault()
        fetch('/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            setShowChat(!showChat)
            
        })
    } 

    return(
        <div>
        
        {c.recipient.firstName === user.firstName?<h4 onClick={chat}>{c.sender.firstName} {c.sender.lastName}</h4> : <h4 onClick={chat}>{c.recipient.firstName} {c.recipient.lastName}</h4> }
        
        {showChat?
         <div>
         {c.messages.map(message => <p>{<h4>{message.user_name}</h4> }{message.body}</p>)}
         <Form onSubmit={e=>sendMessage(e)}>
         <Form.Control className="m-2 2 2 2 p-2 2 2 2 " type="text" name="body" onChange={e=> formSet(e)} />
         <Form.Control className="btn btn-primary " type='submit'/>

        </Form> 
        </div> : null} 
        </div>
    )
}

export default MatchList