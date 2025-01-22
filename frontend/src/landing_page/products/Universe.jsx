import React from 'react';

export default function Univers() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/zerodhafundhouse.png'
            alt='Zerodha Fund House'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/sensibullLogo.svg'
            alt='Sensibull Logo'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/tijori.svg'
            alt='Tijori Logo'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/streakLogo.png'
            alt='Streak Logo'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/smallcaseLogo.png'
            alt='Smallcase Logo'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='media/images/dittoLogo.png'
            alt='Ditto Logo'
            style={{ height: '40px' }}
          />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <button
          className='p-2 btn btn-primary fs-5 mb-5 mt-4'
          style={{ width: '20%', margin: '0 auto' }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
