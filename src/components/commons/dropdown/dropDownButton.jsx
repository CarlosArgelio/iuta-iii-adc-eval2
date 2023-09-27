import styles from './dropDownButton.style'
import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from 'react-i18next';

function DropDownButton() {

    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

    return (
        <Dropdown style={styles}>
        <Dropdown.Toggle variant="red" id="dropdown-basic">
            {t("components.lenguaje.lenguaje")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => i18n.changeLanguage("es")}>ES</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => i18n.changeLanguage("en")}>EN</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownButton;