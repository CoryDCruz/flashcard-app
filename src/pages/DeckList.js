import { Link } from "react-router-dom"
import NewDeckModal from "../components/NewDeckModal"
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DeckList = ({ decks, URL }) => {

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return decks.map((deck) => {
      return (
        <Col key={deck._id}>
           <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Link to={`/decks/${deck._id}`}>
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
      <h1>Decks</h1>
      <Container fluid className="deckList">
          {decks ? loaded() : loading()}  
        <NewDeckModal />
      </Container>
    </div>

  )
} 

export default DeckList
