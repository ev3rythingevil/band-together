import ReactPlayer from "react-player";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Container from 'react-bootstrap/Container'
function MatchCards({userList, matchUp}){


    const findRandomUser = Math.floor(Math.random() * userList.length)
    let randomUser = userList[findRandomUser]
    console.log(randomUser)

 
    function reject(){
        window.location.reload(false);

    }
    function match(){
        matchUp(randomUser)
    }
    return(
        <>
    <Container className="content-justify-center" >

        <Card style={{ width: '30rem'}}>
        <Card.Body>
        <Card.Title>{randomUser.firstName} {randomUser.lastName}</Card.Title>
        {/* <img src={randomUser.images} alt={`${randomUser.firstName}'s Image'`}className="userImage" /> */}
        <ListGroup className="list-group-flush">
            <ListGroupItem>Instruments: {randomUser.instruments}</ListGroupItem>
            <ListGroupItem>Influences: {randomUser.influences}</ListGroupItem>
        </ListGroup>
        <Card.Text>{randomUser.bio}</Card.Text>
        <Button variant="danger" onClick={reject}>No thanks!</Button>
        <Button variant="primary" onClick={match}>Match!</Button>
        <ReactPlayer width={'28rem'} url={`${randomUser.song_url}`} style={{ width: "18 rem"}} />
        </Card.Body>
        </Card>
    </Container>
        </>
    )
}

export default MatchCards