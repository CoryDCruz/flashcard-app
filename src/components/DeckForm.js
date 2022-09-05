import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const DeckForm = ({ createDeck }) => {
  const [newForm, setNewForm] = useState({
    name: "",
    icon: ""
  })

//handleSubmit will call createDeck
  const handleSubmit = e => {
    e.preventDefault()
    createDeck(newForm)
    setNewForm({
      name:"",
      icon: ""
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
        <Form.Label>Deck Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Name of Deck"
          value={newForm.name}
          name="name"
          onChange={handleChange} 
          />
      </Form.Group>
      <div style={{ padding: 10 }}>
        <Button type="submit" variant="primary">Submit</Button>
      </div>
      
    </Form>
  )
}

export default DeckForm
