import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FlashcardForm from './FlashcardForm';

const NewFlashcardModal = ({ id }) => {
  const URL = `http://localhost:4000/api/decks/flashcards/${id}`
  const deckId = id
  const[showState, setShowState] = useState(false)

  const handleClose = () => setShowState(false)

  const handleOpen = () => setShowState(true)

  const createFlashcard = async (flashcard) => { 
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(flashcard)
    })
    setShowState(false)
  }
  
  return (
    <>
      <Button className="nextButton" onClick={handleOpen}>
        New Flashcard
      </Button>

      <Modal show={showState} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Flashcard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlashcardForm createFlashcard={createFlashcard} deckId={deckId}/>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default NewFlashcardModal
