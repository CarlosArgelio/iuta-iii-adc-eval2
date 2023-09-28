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
                En informática, un procesador es un circuito electrónico digital 
                que ejecuta operaciones sobre un conjunto de datos. Se trata del 
                componente más importante de un sistema informático, ya que es el 
                encargado de interpretar las instrucciones de un programa 
                informático y ejecutarlas.
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