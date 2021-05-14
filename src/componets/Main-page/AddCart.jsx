import React from 'react';
import { Link } from 'react-router-dom';

function AddCart() {
  return (
    <>
      <div className='addCart'>
        <Link to='/crm/create-card'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='25' cy='25' r='25' fill='white' />
            <line x1='9.375' y1='24.5' x2='40.625' y2='25.125' stroke='#429CC7' strokeWidth='10' />
            <line x1='25' y1='9' x2='25' y2='40.25' stroke='#429CC7' strokeWidth='10' />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default AddCart;
