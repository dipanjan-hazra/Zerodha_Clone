import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Charges from './Charges'
import OpenAccount from '../OpenAccount';

function Pricing_Page() {
    return ( <>
    <Hero/>
    <OpenAccount/>
    <Brokerage/>
    <Charges/>
    </> );
}

export default Pricing_Page;