import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false)

  return (
    <div onClick={() => setFlip(!flip)}>
      <Card>
        <Card.Body>{flip ? flashcard.back : flashcard.front}</Card.Body>
      </Card>
    </div>
  )

}

export default Flashcard
