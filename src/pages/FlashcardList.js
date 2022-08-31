import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import NewFlashcardModal from '../components/NewFlashcardModal';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FlashcardList = () => {

  const { id } = useParams()

  const URL = `http://localhost:4000/api/decks/flashcards/${id}`
  const navigate = useNavigate()
  const [flashcards, setFlashcards] = useState([])

  const getFlashCards = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setFlashcards(data)
    } catch (error) {
      //TODO add error message
    }
  }

  const loading = () => {
    return <h1>Loading....</h1> // add spinner
  }

  const loaded = () => {
    return (
      <div className="card-grid">
        {flashcards.map(flashcard => {
          return (
            <Col key={flashcard._id}>
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
    getFlashCards()
  })

  return (
    <div>
      <Container>
        <h1>Flashcards</h1>
        {flashcards ? loaded() : loading()}
        <NewFlashcardModal id={id} />
        <Button variant="outline-danger" onClick={deleteDeck}>Delete Deck</Button>
      </Container>
      
    </div>
    )

}

export default FlashcardList
