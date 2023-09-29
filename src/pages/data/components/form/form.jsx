import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// import { useTranslation } from 'react-i18next';



function FormDisabledInputExample() {
    // const [t, i18n] = useTranslation("global");
    const [inputValue, setInputValue] = useState("");
    // const [labelValue, setLabelValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // const handleLabelChange = (e) => {
    //     setLabelValue(e.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes obtener el valor del input
        const inputValue = e.target.elements.inputValue.value;

        // Aquí puedes procesar el valor del input
        console.log(inputValue);
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" style={{
                    margin: "8px"
                }}>
                    <Form.Label>Inserte algun tipo de dato</Form.Label>
                    <Form.Control name="inputValue" placeholder="Disabled input" value={inputValue} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" style={{
                    margin: "8px"
                }}>
                    <Form.Label>Tipo de dato a validar</Form.Label>
                    <Form.Select placeholder='Seleccione un tipo'>
                        <option>Entero</option>
                        <option>Cadena de caracateres</option>
                        <option>Booleano</option>
                        <option>Flotante</option>
                    </Form.Select>
                </Form.Group>

                <div style={{
                    margin: "8px"
                }}>
                    <Button type='submit' variant='primary' className='mt-3' style={{
                        width: "100%"
                    }}>Submit</Button>
                </div>
            </Form>
        </>
    );
}

export default FormDisabledInputExample;