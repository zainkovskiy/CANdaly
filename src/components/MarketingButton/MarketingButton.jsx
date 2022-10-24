import React, { useState, useContext } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { Context } from 'components/LayoutContext';

import { connectToServer } from '../../Api';
import './MarketingButton.scss';

export const MarketingButton = () => {
  const { status } = useContext(Context);
  const [currentStatus, setCurrentStatus] = useState(status.getMarket);

  const handleChange = () => {
    setCurrentStatus(event.target.checked);
    connectToServer({
      userId: userId,
      action: 'setMarket',
      market: event.target.checked,
    });
  };

  return (
    <div className='duly-button'>
      <FormControlLabel
        sx={{ margin: 0 }}
        control={
          <Switch
            color='primary'
            checked={currentStatus}
            onChange={handleChange}
          />
        }
        label='Получать звонки по маркетинговым кампаниям'
        labelPlacement='start'
      />
    </div>
  );
};
