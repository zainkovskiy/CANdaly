import React from 'react';

import './Duly.scss';

const userPlaceholder =
  'https://crm.centralnoe.ru/dealincom/assets/img/placeholder-user.png';

export const Duly = ({ duly, side }) => {
  const openRealtor = (realtor) => {
    let readyString = `https://crm.centralnoe.ru/company/personal/user/${realtor}/`;
    BX.SidePanel.Instance.open(readyString, {
      animationDuration: 300,
      width: document.getElementById('root').clientWidth,
    });
  };

  return (
    <div
      className={`duly ${duly?.name ? '' : 'duly_disabled'}`}
      onClick={() => openRealtor(duly.UID)}
    >
      <div className='duly__text_wrap'>
        <span className='text duly__title duly__text'>{side} берег</span>
        <span className='text duly__text'>{duly.name || 'Не указан'}</span>
      </div>
      <img
        className='duly__avatar'
        src={duly.avatar || userPlaceholder}
        alt='photo'
      />
    </div>
  );
};
