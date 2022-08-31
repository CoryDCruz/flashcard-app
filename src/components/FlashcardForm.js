import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const FlashcardForm = ({ createFlashcard, deckId }) => {
  const [newForm, setNewForm] = useState({
    front: "",
    back: ""
  })

//handleSubmit will call createDeck
  const handleSubmit = e => {
    e.preventDefault()
    createFlashcard(newForm)
    setNewForm({
      front:"",
      back: ""
    })
  } 

  const handleChange = e => {
    setNewForm((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value,
    }))
  }   

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDeckName">
        <Form.Label>Question</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter question"
          value={newForm.front}
          name="front"
          onChange={handleChange} 
          />
      </Form.Group>
      <Form.Group controlId="formDeckIcon">
        <Form.Label>Answer</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Answer" 
          value={newForm.back}
          name="back"
          onChange={handleChange}
          />
      </Form.Group>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )
}

export default FlashcardForm
