import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Transition() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      {
        open 
          ? 
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card body style={{ width: '400px' }}>
                En informática, los datos son la representación simbólica 
                de un atributo o variable cualitativa o cuantitativa. 
                Son la información que recibe el computador a través de 
                distintos medios, y que es manipulada mediante el 
                procesamiento de los algoritmos de programación.
                </Card>
              </div>
            </Collapse>
          </div>
          : 
          <div></div>
      }
    </>
  );
}

export default Transition;