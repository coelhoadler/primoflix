import React from 'react';
import './index.css';

import ButtonLink from './ButtonLink';

function BannerMain() {
    return (
        <div className="BannerMain">
            <h1 className="title">
                Um dos investidores 
                <br />
                mais influentes do país
            </h1>
            <ButtonLink as="a" href="https://www.youtube.com/user/thigas">
                Meu canal
            </ButtonLink>
        </div>
    );
}

export default BannerMain;