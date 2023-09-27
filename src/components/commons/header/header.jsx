import styles from './header.style'
import logoIUTA from '../../../assets/logoIUTA.png';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useTranslation } from 'react-i18next';

const Headers = () => {
    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

    return (
        <>
        <Navbar data-bs-theme="white" style={{backgroundColor: styles.backgroundColor}}>
            <Container>
            <Navbar.Brand href="#home" style={{color: styles.colorWhite}}>
                <img src={logoIUTA} alt="logo IUTA" />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home" style={{color: styles.colorWhite}}> {t('components.header.bus')} </Nav.Link>
                <Nav.Link href="#features" style={{color: styles.colorWhite}}>Procesador</Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Memoria</Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Dato</Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Disco</Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}>Sistema Operativo</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <br />
        <Button onClick={() => i18n.changeLanguage("en")} style={{backgroundColor: styles.backgroundColor}}>EN</Button>
        <br />
        <br />
        <Button onClick={() => i18n.changeLanguage("es")} style={{backgroundColor: styles.backgroundColor}}>ES</Button>

        </>
    );
}

export default Headers;