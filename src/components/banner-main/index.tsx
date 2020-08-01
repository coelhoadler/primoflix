import React from 'react';
import './index.css';

function BannerMain() {
    return (
        <div className="BannerMain">
            <h1 className="title">
                Um dos investidores 
                <br />
                mais influentes do país
            </h1>
            <a href="https://www.youtube.com/user/thigas" className="button-youtubeChannel">
                Visite meu canal
            </a>
        </div>
    );
}

export default BannerMain;