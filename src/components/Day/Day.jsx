import React, { useContext } from 'react';
import moment from 'moment';
import Link from '@mui/material/Link';
import { Context } from 'components/LayoutContext';

import './Day.scss';

const userPlaceholder =
  'https://crm.centralnoe.ru/dealincom/assets/img/placeholder-user.png';

export const Day = ({ day }) => {
  const { toggleDialog } = useContext(Context);

  const isShowName = () => {
    if (moment().isAfter(day.date, 'day')) {
      if (day.watcher.name) {
        return (
          <span className='text day__avatar-name'>{day.watcher.name}</span>
        );
      }
      return null;
    }
    return (
      <Link
        component='button'
        underline='hover'
        onClick={() => toggleDialog(day)}
        sx={{ fontSize: 11 }}
      >
        {day.watcher.name ? day.watcher.name : 'Назначить'}
      </Link>
    );
  };

  return (
    <div className='day'>
      <span className='text day__date'>
        {moment(day.date).locale('ru').format('DD MMMM YYYY')}
      </span>
      <div className='day__buttom'>
        <img
          className='day__avatar'
          src={day.watcher.avatar || userPlaceholder}
          alt='photo'
        />
        {isShowName()}
      </div>
    </div>
  );
};
