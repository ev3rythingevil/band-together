import { useState } from "react"

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
               'bio': ""
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
        <>
        <h1>Signups</h1>
        <form onSubmit={e => submitUser(e)}>
            <label> Username: 
            <input type='text' name="username" onChange={e => saveData(e)}/>
            </label>
            <label> Password: 
            <input type='password' name="password" onChange={e => saveData(e)}/>
            </label>
            <label> First Name: 
            <input type='text' name="firstName" onChange={e => saveData(e)}/>
            </label>
            <label> Last Name: 
            <input type='text' name="lastName" onChange={e => saveData(e)}/>
            </label>
            <label> email: 
            <input type='email' name="email" onChange={e => saveData(e)}/>
            </label>
            <label> Images: 
            <input type='text' name="images" onChange={e => saveData(e)}/>
            </label>
            <label> Instruments: 
            <input type='text' name="instruments" onChange={e => saveData(e)}/>
            </label>
            <label> Influences: 
            <input type='text' name="influences" onChange={e => saveData(e)}/>
            </label>
            <label> Bio: 
            <textarea type='text' name="bio" rows='4' cols='30' onChange={e => saveData(e)}/>
            </label>
            <input type='submit'/>
        </form>
        </>
    )
}

export default Signup