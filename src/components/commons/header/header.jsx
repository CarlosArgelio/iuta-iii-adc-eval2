import styles from './header.style'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoIUTA from '../../../assets/logoIUTA.png'

const Headers = () => {
  return (
    <>
      <Navbar data-bs-theme="white" style={{backgroundColor: styles.backgroundColor}}>
        <Container>
          <Navbar.Brand href="#home" style={{color: styles.colorWhite}}>
            <img src={logoIUTA} alt="logo IUTA" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: styles.colorWhite}}>Bus</Nav.Link>
            <Nav.Link href="#features" style={{color: styles.colorWhite}}>Procesador</Nav.Link>
            <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Memoria</Nav.Link>
            <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Dato</Nav.Link>
            <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Disco</Nav.Link>
            <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Sistema Operativo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;