import { CardHeader } from '@mui/material';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)

  return (
    <div>
      <Card className="justify-content-center" border="primary" onClick={() => setFlip(!flip)}>
        <Card.Body> {flip ? flashcard.back : flashcard.front}</Card.Body>
      </Card>
    </div>
  )

}

export default Flashcard
