import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 p-3'>
                <div className='row text-center mt-3 p-3'>
                    <h2>The Zerodha Universe</h2>
                    <p className = "mt-2" style={{fontSize:"1.2rem"}}>Extend your trading and investment experience even further with our partner platforms</p>

                    <div className='col-4 p-4 text-center'>
                        <img 
                            src='media/Images/zerodhaFundhouse.png' 
                            alt='Zerodha Fund House' 
                            style={{ width: '55%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-3 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                            Our asset management venture <br />
                            that is creating simple and transparent index <br />
                            funds to help you save for your goals.
                        </p>
                        </div>

                    
                    <div className='col-4 p-4 text-center'>
                        <img 
                            src='media/Images/sensibullLogo.svg' 
                            alt='sensibullLogo' 
                            style={{ width: '60%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-4 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                           Options trading platform that lets you<br />
                            create strategies, analyze positions, and examine<br />
                            data points like open interest, FII/DII, and more.

                        </p>
                        </div>

                        <div className='col-4 p-3 text-center'>
                        <img 
                            src='media/Images/tijori.svg' 
                            alt='Zerodha Fund House' 
                            style={{ width: '45%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-3 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                            Our asset management venture <br />
                            that is creating simple and transparent index <br />
                            funds to help you save for your goals.
                        </p>
                        </div>
                </div>
                <div className='row text-center  p-2'>
                        <div className='col-4 p-2 text-center'>
                        <img 
                            src='media/Images/streakLogo.png' 
                            alt='Zerodha Fund House' 
                            style={{ width: '55%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-3 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                         Systematic trading platform  <br />
                           that allows you to create and backtest  <br />
                            strategies without coding.
                        </p>
                        </div>

                    
                    <div className='col-4 p-4 text-center'>
                        <img 
                            src='media/Images/smallcaseLogo.png' 
                            alt='sensibullLogo' 
                            style={{ width: '60%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-2 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                          Thematic investing platform <br />
                            that helps you invest in diversified e<br />
                            baskets of stocks on ETFs.

                        </p>
                        </div>

                        <div className='col-4 p-3 text-center'>
                        <img 
                            src='media/Images/dittoLogo.png' 
                            alt='Zerodha Fund House' 
                            style={{ width: '45%', objectFit: 'contain' }} 
                        />
                        <p 
                            className='mt-3 p-2' 
                            style={{ 
                            fontSize: '.75rem', 
                            lineHeight: '1rem', 
                            fontWeight: '600',  
                            color: '#9B9B9B',

                            }}
                        >
                            Personalized advice on life  <br />
                           and health insurance. No spam  <br />
                            and no mis-selling.
                        </p>
                        </div>
                </div>

        </div>
     );
}

export default Universe;