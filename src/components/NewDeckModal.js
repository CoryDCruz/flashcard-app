import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeckForm from './DeckForm';

const NewDeckModal = () => {
  const URL = 'http://localhost:4000/api/decks'
  const[showState, setShowState] = useState(false)

  const handleClose = () => setShowState(false)

  const handleOpen = () => setShowState(true)

  const createDeck = async (deck) => { 
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(deck)
    })
    setShowState(false)
  }
  
  return (
    <>
      <Button className="nextButton" onClick={handleOpen}>
        New Deck
      </Button>
      <Modal show={showState} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeckForm createDeck={createDeck} />
        </Modal.Body>
      </Modal>
    </>

  )
}

export default NewDeckModal
