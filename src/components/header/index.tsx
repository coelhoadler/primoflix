import React from 'react';
import LogoPrimo from '../../assets/LogoPrimo.png';

import './Header.css';

import ButtonLink from './components/button-link';

function Header() {
    return (
        <header className="Menu">
            <a href="/">
                <img
                    className="Logo" 
                    src={LogoPrimo}
                    alt="Logotipo do primo" />
            </a>
            <ButtonLink
                className="ButtonLink" 
                as="a"
                href="/novo-video">
                Novo vídeo
            </ButtonLink>
        </header>
    );
}
  
export default Header;
  