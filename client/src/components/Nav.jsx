

function Nav({logOut, loggedIn}){

    function doClick(){
        logOut()
    }

    return(
        <>
        <h1> This is a Navbar? </h1>
        {loggedIn? <button onClick={doClick}>Log Out</button> : null}
        </>
    )
}

export default Nav