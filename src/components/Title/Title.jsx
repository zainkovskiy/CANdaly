import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';

import './Title.scss';

export function Title({ title, buttonName, children, onClick, tooltip }) {
  return (
    <div className='title'>
      <div className='title__wrap'>
        <span>
          {title}
          {children}
        </span>
        {
          tooltip &&
          <Tooltip title={tooltip}>
            <HelpOutlineIcon sx={{ fill: '#fff' }} />
          </Tooltip>
        }
      </div>
      <span
        className='title__button'
        onClick={onClick}
      >
        {buttonName}
      </span>
    </div>
  );
}
