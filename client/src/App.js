import { Routes, Route} from 'react-router-dom'
import './App.css';
import { useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Main from './components/Main';
import UserProfile from './components/UserProfile';
import Matches from './components/Matches';


function App() {
  
  // states
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([])
  const [convos, setConvos] = useState([])
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
  useEffect(()=> {
    fetch('/conversations')
    .then(res => res.json())
    .then(data => {
      setConvos(data)
    })
  }, [])

  // functions
 
  function matchUp(match){
    console.log(match)
    fetch('/follows' , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match)
    })
    .then(r => r.json())
    .then(data => {
      setUser(data)
      window.location.reload(false);
    })
  }

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
    <Navbar loggedIn={loggedIn}/>
    <Auth  logIn={logIn} newUser={newUser}/>
    </>
  )
  
  else 
  return (
    
    <Routes>
    <Route path='/' element={<Navbar logOut={logOut} loggedIn={loggedIn}/>}>
      <Route index element={<Main user={user} matchUp={matchUp}/>} />
      <Route path="UserProfile" element={<UserProfile user={user} setUser={setUser}/>} />
      <Route path="Matches" element={<Matches user={user} convos={convos} />} />
      </Route>
    </Routes>
   
    
  );
}

export default App;
