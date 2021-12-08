import { useState, useEffect } from "react"
import MatchList from "./MatchList"


function Matches({convos, user}){

    console.log(convos)
    return(
        <>
        <h1>Your Matches</h1>
        {convos.map( c => <MatchList  c = {c} user={user}/> )}
        </>
    )
}

export default Matches