
import './App.css';
import { useState , useEffect} from 'react';
import Nav from './components/Nav';
import Auth from './components/Auth';


function App() {
  
  // states
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([])
console.log(user)
  // effects
  useEffect(()=> {
    fetch('/me')
    .then(res=>{
      if (res.ok){
        res.json().then((user) => {
          setUser(user)
          setLoggedIn(!loggedIn)
        });
      }
    });
  }, []
  );

  // functions

  function newUser(data){
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(r=> {
      if (r.ok){
        r.json()
        .then(r => {
          setUser(r)
          setLoggedIn(!loggedIn)
        })
      }
      else
      return alert("Username already taken")
    })
  }

  function logOut(){
    fetch('/logout',{
    method : "DELETE"})
    .then(()=>{
      setLoggedIn(!loggedIn)
      setUser([])
    })
  }


  function logIn(userData){
    fetch("/login",{
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    }
    )
    .then( res => {
      if (res.ok){
        res.json()
        .then(data => {
          setUser(data)
          setLoggedIn(!loggedIn)
      })
    }})
  }
  
  if (!loggedIn)

  return(
    <>
    <Nav loggedIn={loggedIn}/>
    <Auth  logIn={logIn} newUser={newUser}/>
    </>
  )
  
  else 
  return (
    <div className="App">
      <Nav logOut={logOut} loggedIn={loggedIn}/>
    <h1>Ayyy lmao</h1>
    </div>
  );
}

export default App;
