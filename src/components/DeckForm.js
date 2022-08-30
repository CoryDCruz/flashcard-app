import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const DeckForm = () => {
  return (
    <Form>
      <Form.Group controlId="formDeckName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name of Deck" />
      </Form.Group>
      <Form.Group controlId="formDeckIcon">
        <Form.Label>Deck Icon</Form.Label>
        <Form.Control type="text" placeholder="Enter Link to Image" />
      </Form.Group>
    </Form>
  )
}

export default DeckForm
