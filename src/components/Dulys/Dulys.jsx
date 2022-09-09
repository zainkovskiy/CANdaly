import React, { useContext } from 'react';

import { Duly } from 'components/Duly';
import { Context } from 'components/LayoutContext';

import './Dulys.scss';

export const Dulys = () => {
  const { status } = useContext(Context);
  return (
    <div className='dulys'>
      <Duly
        duly={status.left}
        side={'Левый'}
      />
      <Duly
        duly={status.right}
        side={'Правый'}
      />
    </div>
  );
};
