import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import NewFlashcardModal from '../components/NewFlashcardModal';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Triangle } from 'react-loader-spinner'

const FlashcardList = () => {

  const { id } = useParams()

  const URL = `http://localhost:4000/api/decks/flashcards/${id}`
  const navigate = useNavigate()
  const [flashcards, setFlashcards] = useState([])
  const [deck, setDeck] = useState("")

  const getFlashCards = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setFlashcards(data)
    } catch (error) {
      //TODO add error message
    }
  }

  const getDeck = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/decks/${id}`)
      const data = await response.json()
      setDeck(data)
      getFlashCards()
    } catch (error) {
      
    }
  }

  const loading = () => {
    return <Triangle
              height="80"
              width="80"
              color="black"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
              />  
  }

  const loaded = () => {
    return (
      <div className="card-grid">
        {flashcards.map(flashcard => {
          return (
            <Col key={flashcard._id} style={{ padding: 15}}>
              <Flashcard flashcard={flashcard} />
            </Col>
          )
        })}
      </div>
    )
  }

  const deleteDeck = async () => {
    try {
      await fetch(`http://localhost:4000/api/decks/${id}`, {
        method: "DELETE"
      })
      navigate('/')
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getDeck()
  }, [])

  return (
    <div style={{ padding: 10}}>
      <Button onClick={() => navigate('/')}>Back</Button>
      <div className="flashcardList">
        <Container>
          <h1>{deck.name}</h1>
          {flashcards ? loaded() : loading()}
          <div style={{ padding: 10}}>
            <NewFlashcardModal id={id} />
          </div>
          <div style={{ padding: 10}}>
            <Button variant="outline-danger" onClick={deleteDeck}>Delete Deck</Button>
          </div>
        </Container>
      </div>
    </div>
    )

}

export default FlashcardList
