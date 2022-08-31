import { Link } from "react-router-dom"
import NewDeckModal from "../components/NewDeckModal"
import Card from "react-bootstrap/Card"

const DeckList = ({ decks, URL }) => {

  const deleteDeck = async (id) => {
    try {
      await fetch(`${URL}/${id}`, {
        method: "DELETE"
      })

    } catch (error) {
      
    }

  }
  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return decks.map((deck) => {
      return (
        <Card>
          <Card.Body>
            <div key={deck._id} className="decks">
              <Link to={`/decks/${deck._id}`}>
                <h1>{deck.name}</h1>
              </Link>
            </div>
          </Card.Body>
        </Card>
      )
    })
  }
  return (
    <section>
      {decks ? loaded() : loading()}
      <NewDeckModal />
    </section>
    

  )
} 

export default DeckList
