import { Link, Outlet} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Navbar({logOut, loggedIn}){

    function doClick(){
        logOut()
    }

    return(
        <div>
       <Nav fill className="navbar navbar-expand-lg navbar-dark bg-primary" defaultActiveKey="/">
       <Nav.Item>
       <span className="navbar-brand mb-0 h1">BandTogether</span> 
       </Nav.Item>   
        <Nav.Item>
        <Nav.Link className="navbar-brand mb-0 h1" href="/">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navbar-brand mb-0 h1" href="UserProfile">My Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navbar-brand mb-0 h1" href="Matches">My Matches</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        {loggedIn? <Nav.Link className="navbar-brand mb-0 h1" onClick={doClick}>Log Out</Nav.Link> : null}
        </Nav.Item>
        </Nav>
        <Outlet />
        </div>
    )
}

export default Navbar