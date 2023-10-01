import React, { useState } from 'react';
import './cards.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useTranslation } from 'react-i18next';


function Cards({ title, info, image, example }) {
    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
            <Card style={{ width: '18rem', margin: "10px" }} className={`card-flip ${isFlipped && 'card-with-frame'}`}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {isFlipped ? info : `${t('pages.bus.components.infoStart')} ${title}?`}
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
                            {t('components.back')} 
                            </Button> 
                        </div>
                        : <Button variant="primary" onClick={handleFlip}> {t('pages.bus.components.see')} </Button>
                }
            </Card.Body>
            </Card>
    );
}

export default Cards;