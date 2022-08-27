import React, { useState, useEffect } from 'react';
import { Routes, Router } from 'react-router-dom';

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
    <div>
      {decks.map((deck) => (
        <div> 
          <l1>{ deck.name } Flashcards ids: {deck._id}</l1>
        </div>
          )
        )
      }
    </div>
  )
}

export default Main 
