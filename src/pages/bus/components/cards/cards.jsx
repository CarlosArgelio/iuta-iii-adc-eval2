import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'



function Cards({ title, info, image, example }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
            <Card style={{ width: '18rem', margin: "10px" }} className={`card-flip ${isFlipped && 'card-with-frame'}`}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {isFlipped ? info : `Quieres saber que es el ${title}?`}
                </Card.Text>
                {
                    isFlipped ? 
                        <div>
                            <Button variant="primary" style={{
                            // position: 'absolute', 
                            width: '200%; float: right',
                            textAlign: 'center',
                            margin: 'auto'
                            }} 
                            onClick={handleFlip}
                            > 
                            Volver 
                            </Button> 
                        </div>
                        : <Button variant="primary" onClick={handleFlip}> Mirame </Button>
                }
            </Card.Body>
            </Card>
    );
}

export default Cards;