import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageDataExample from '../../../../assets/image.png'
import './cards.css'



function Cards() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
            <Card style={{ width: '18rem', margin: "10px" }} className={`card-flip ${isFlipped && 'card-with-frame'}`}>
            <Card.Img variant="top" src={imageDataExample} />
            <Card.Body>
                <Card.Title>{isFlipped ? 'Bus de datos' : 'Bus de datos'}</Card.Title>
                <Card.Text>
                {isFlipped ? 'El bus de datos de un ordenador conecta la CPU, la RAM y los dispositivos de almacenamiento.' : 'Quieres saber que es el bus de datos?'}
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
                            // onClick={handleFlip}
                            > 
                            Un ejemplo? 
                            </Button> 

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