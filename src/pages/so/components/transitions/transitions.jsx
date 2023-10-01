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
                Un sistema operativo (S.O.) es un conjunto de programas que gestiona los recursos de un ordenador, como la memoria, el disco duro, el procesador y los periféricos. Es el software que permite que un ordenador funcione y que el usuario pueda interactuar con él.
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