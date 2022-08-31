import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import NewFlashcardModal from '../components/NewFlashcardModal';
import Button from 'react-bootstrap/Button'

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
            <div key={flashcard._id}>
              <Flashcard flashcard={flashcard} />
            </div>
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
      {flashcards ? loaded() : loading()}
      <NewFlashcardModal id={id} />
      <Button variant="outline-danger" onClick={deleteDeck}>Delete Deck</Button>
    </div>
    )

}

export default FlashcardList
