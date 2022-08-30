import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FlashcardList from '../pages/FlashcardList'
import DeckList from '../pages/DeckList'

const Main = (props) => {
  
  const URL = 'http://localhost:4000/api/decks'
  const [deck, setDeck] = useState([])

  const getDecks = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setDeck(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getDecks()
  })

  return (
    <main>
      <Routes>
        <Route path='/' 
          element={
            <DeckList decks={deck} />
          }
        />
        <Route path='/decks/:id'
          element ={
            <FlashcardList 
            />
          }
        />
      </Routes>
    </main>
  )
}

export default Main 
