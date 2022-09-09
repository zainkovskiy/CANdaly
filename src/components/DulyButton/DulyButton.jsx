import React, { useState, useContext } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { Context } from 'components/LayoutContext';

import { connectToServer } from '../../Api';
import './DulyButton.scss';

export const DulyButton = () => {
  const { status } = useContext(Context);
  const [currentStatus, setCurrentStatus] = useState(status.isWatch);

  const handleChange = () => {
    setCurrentStatus(event.target.checked);
    connectToServer({
      userId: userId,
      action: 'setStatus',
      isWatch: event.target.checked,
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
            disabled={!status.active}
          />
        }
        label='Заступить на дежурство'
        labelPlacement='start'
      />
    </div>
  );
};
