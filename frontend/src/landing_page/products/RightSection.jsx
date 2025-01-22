import React from 'react';

export default function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: 'none' }}>
              Learn More
              <i class='fa fa-long-arrow-right p-2'></i>
            </a>
          </div>
        </div>
        <div className='col-6'>
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
