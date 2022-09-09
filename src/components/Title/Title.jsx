import React from 'react';

import './Title.scss';

export function Title({ title, buttonName, children, onClick }) {
  return (
    <div className='title'>
      <span>
        {title}
        {children}
      </span>
      <span
        className='title__button'
        onClick={onClick}
      >
        {buttonName}
      </span>
    </div>
  );
}
