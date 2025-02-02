import React from 'react';

export default function Education() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1 className='mb-3'>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href='' className='mb-4' style={{ textDecoration: 'none' }}>
            Varsity
            <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
          </a>
          <p className='mt-4'>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href='' style={{ textDecoration: 'none' }}>
            TradingQ&A
            <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
