import React, { useState, useContext } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { TextField } from '@mui/material';

import { Context } from 'components/LayoutContext';

import { connectToServer } from '../../Api';

export const MarketingButton = () => {
  const { status } = useContext(Context);
  const [currentStatus, setCurrentStatus] = useState(status.getMarket);
  const [ phone, setPhone ] = useState('');

  const handleChange = () => {
    setCurrentStatus(event.target.checked);
    connectToServer({
      userId: userId,
      action: 'setMarket',
      market: event.target.checked,
      phone: phone
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
            disabled={phone.length !== 4}
            />
        }
        label='Получать звонки по маркетинговым кампаниям'
        labelPlacement='start'
      />
      <TextField
        size='small'
        value={phone}
        label='Внутренний номер'
        autoComplete='off'
        type='number'
        onChange={(event) => {setPhone(event.target.value)}}
      />
    </div>
  );
};
