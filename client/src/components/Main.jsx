import { useEffect, useState } from "react"
import MatchCards from "./MatchCards"

function Main({user, matchUp}){
    const [currentLocation, setCurrentLocation] = useState(0)
    
    const [userList, setUserList] = useState(['placeholder'])
    const options = {
        enableHighAccuracy: true,
        };
        
        
        function error() {
            alert('Sorry, no position available.');
        }
        
     useEffect(()=>{
        navigator.geolocation.watchPosition(getLocation, error, options);
            function getLocation(position){
                const latitude = position.coords.latitude              
                const longitude = position.coords.longitude
            fetch(`/users/${user.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "longitude": longitude,
                    "latitude": latitude,
                })
            })
            .then(r => r.json())
            .then(data =>  console.log(data.latitude))
            }              
                
    },[])


    useEffect(() => {
        
        fetch("/users")
        .then(r=>r.json())
        .then(data => {
            const listData = data.filter(d => d.id !== user.id)
            if (listData[0]){
            setUserList(listData)}
            else 
            alert("No available Matches")
         })
    }, [currentLocation])
    
    if (userList[0] !== 'placeholder')
    
    return(
        <>
        <MatchCards userList={userList} matchUp={matchUp}/>
        </>
    )

    else
    return(
        <>
        </>
    )
}

export default Main