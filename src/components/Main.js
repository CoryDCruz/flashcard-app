import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Decks from '../pages/Deck_Index'

const Main = (props) => {
  const [decks, setDecks] = useState([])
  const URL = 'http://localhost:4000/api/decks'

  const getDecks = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setDecks(data)
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
          element = {
            <Decks decks={decks}/>
          }
        />
      </Routes>
    </main>
  )
}

export default Main 
