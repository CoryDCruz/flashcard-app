import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeckForm from './DeckForm';

const NewDeckModal = () => {
  const[showState, setShowState] = useState(false)

  const handleClose = () => setShowState(false)

  const handleOpen = () => setShowState(true)

  const handleSubmit = () => {
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
          <DeckForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default NewDeckModal
