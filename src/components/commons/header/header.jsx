import styles from './header.style'
import logoIUTA from '../../../assets/logoIUTA.png';

import DropDownButton  from '../dropdown/dropDownButton';

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
                <Nav.Link href="/iuta-iii-adc-eval2/#/bus" style={{color: styles.colorWhite}}> {t('components.header.bus')} </Nav.Link>
                <Nav.Link href="/iuta-iii-adc-eval2/#/processor" style={{color: styles.colorWhite}}> {t('components.header.processor')} </Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}> {t('components.header.memory')} </Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}> {t('components.header.data')} </Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}> {t('components.header.disk')} </Nav.Link>
                <Nav.Link href="#pricing" style={{color: styles.colorWhite}}> {t('components.header.so')}  </Nav.Link>

                <DropDownButton />

            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default Headers;