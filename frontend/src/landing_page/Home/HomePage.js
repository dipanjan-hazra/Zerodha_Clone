import React from 'react';
import Award from './Award';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import About from '../about/AboutPage'


function HomePage() {
    return (
    <>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>  
        <OpenAccount/>
    </>
    );
}

export default HomePage;