import React from 'react';
import './index.css';

import ButtonLink from './ButtonLink';

function BannerMain() {
    return (
        <div className="BannerMain">
            <h1 className="title">
                Um dos investidores 
                <br />
                <span>mais influentes</span> do país
            </h1>
            <ButtonLink as="a" href="https://www.oprimorico.com.br/" target="_blank">
                Conheça o primo
            </ButtonLink>
        </div>
    );
}

export default BannerMain;