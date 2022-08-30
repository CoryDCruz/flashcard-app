import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';

const FlashcardList = () => {

  const { id } = useParams()

  const URL = `http://localhost:4000/api/decks/flashcards/${id}`
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
    return <h1>Loading</h1> // add spinner
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

  useEffect(() => {
    getFlashCards()
  })

  return (
    <div>
      {flashcards ? loaded() : loading()}
    </div>
    )

}

export default FlashcardList
