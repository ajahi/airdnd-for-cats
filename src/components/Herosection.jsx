import React from 'react';

function Hero() {
    return ( 
        <section className="hero">
    <div className=" images images--grid">
        <img className="hero-img" src="https://placekitten.com/400/400" alt=""/>
        <img className="hero-img" src="https://placekitten.com/600/300" alt=""/>
        <img className="hero-img" src="https://placekitten.com/900/800" alt=""/>
        <img className="hero-img" src="https://placekitten.com/1200/400" alt=""/>
        <img className="hero-img" src="https://placekitten.com/1200/400" alt=""/>
 
              
        
    </div>
    <h2 className="section-heading">
        Online Experiences
    </h2>
    <p className="section-paragraph">
        This is a opensource react project feel free to learn or add to it. its github link is <a href="https://github.com/ajahi/airdnd-for-cats">Here</a>
    </p> 
        </section>
     );
}

export default Hero;
