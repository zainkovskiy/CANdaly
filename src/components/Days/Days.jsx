import React, { useContext } from 'react';

import { Context } from 'components/LayoutContext';
import { Day } from 'components/Day';

export const Days = () => {
  const { days } = useContext(Context);

  const handleWindow = () => {
    setOpen(!open);
  };

  return (
    <div style={styleDays}>
      {days?.length > 0 &&
        days.map((day, idx) => (
          <Day
            key={idx}
            day={day}
            handleWindow={handleWindow}
          />
        ))}
    </div>
  );
};

const styleDays = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
  maxWidth: '700px',
  margin: '0 auto',
};
