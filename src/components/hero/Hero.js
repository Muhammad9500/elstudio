import React from 'react'
import poster from "./img/poster.jpg"
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero_content-container'>
                <div className='hero_poster-container'><img className="hero-poster" src={poster}/></div>
                <div className='hero_text-content'>This site is my calling card.
                Here you can watch my work, follow my journey, and get in touch.<br/><br/>
                I shoot short films and publish them on my YouTube channel.
                Each project is a step toward telling stories the way I see them — raw, honest, and with style.
                <br/><br/>
                On Instagram, I share behind-the-scenes, and moments from the creative process.</div>
            </div>
        </div>
    );
}

export default Hero;