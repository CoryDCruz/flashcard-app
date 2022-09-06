import { Link } from "react-router-dom"
import NewDeckModal from "../components/NewDeckModal"
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";

const DeckList = ({ decks, getDecks }) => {

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return decks.map((deck) => {
      return (
        <Col key={deck._id} style={{ padding: 15}}>
           <Card>
            <Card.Body style={{textAlign: "center"}}>
              <Link style={{ textDecoration: "none"}} to={`/decks/${deck._id}`}>
                <h1>{deck.name}</h1>
              </Link>
            </Card.Body>
          </Card>
        </Col>
       
      )
    })
  }

  return (
    <div className="deckList">
      <h1 style={{ padding: 15 }}>Select a Deck</h1>
      <Container fluid>
          {decks ? loaded() : loading()}  
      </Container>
      <Container fluid >
        <NewDeckModal getDecks={getDecks}/>
      </Container>
      </div>
  )
} 

export default DeckList
