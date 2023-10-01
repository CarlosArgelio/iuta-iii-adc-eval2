import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            Mis datos
                        </h4>
                        <ul className='list-unstyled'>
                            <li>Carlos Argelio Palacios Ramos</li>
                            <li>30.032.692</li>
                            <li>Tercer Cuatrimestre</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Button */}
                <div className="footer-button">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Carlos Argelio - All Rigths
                    </p>
                </div>
            </div>
        </div>
      </FooterContainer>
    )
  }


export default Footer

const FooterContainer = styled.footer`
    .footer-middle {
        background-color: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .foot-button {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
`;