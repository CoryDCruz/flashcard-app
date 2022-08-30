import { Link } from "react-router-dom"
import NewDeckModal from "../components/NewDeckModal"

const DeckList = ({ decks }) => {

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return decks.map((deck) => {
      return (
        <div key={deck._id} className="decks">
          <Link to={`/decks/${deck._id}`}>
            <h1>{deck.name}</h1>
          </Link>
        </div>
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
