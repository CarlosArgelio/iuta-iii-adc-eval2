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
                En informática, un bus es un sistema digital que permite 
                la transferencia de datos entre los componentes de un sistema 
                informático. Está formado por cables o pistas en un circuito 
                impreso, dispositivos como resistores y condensadores, 
                además de circuitos integrados.
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