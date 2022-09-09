import React, { createContext, useEffect, useState } from 'react';

import { Linear } from 'components/Linear';

import { connectToServer } from '../../Api';

export const Context = createContext();

export const LayoutContext = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    connectToServer({
      userId: userId,
      // userId: 2921,
      action: 'getStatus',
    })
      .then((answer) => {
        if (answer?.data?.result === 'ok') {
          setData(answer.data);
        }
      })
      .finally(() => {
        setLoading(!loading);
      });
  }, []);

  const toggleDialog = (value) => {
    if (value === dialog) {
      setDialog(null);
    }

    setDialog(value);
  };

  const setResponsibleDOM = (dialog) => {
    const find = data.statusOffice.days.find(
      (item) => item.date === dialog.date
    );
    const index = data.statusOffice.days.indexOf(find);
    let newDays = data.statusOffice.days;
    newDays.splice(index, 1, dialog);
    setData((prevState) => ({
      ...prevState,
      statusOffice: { ...data.statusOffice, days: newDays },
    }));
  };

  const value = {
    data,
    status: data && data.status,
    officeName: data && data.statusOffice.officeName,
    officeId: data && data.statusOffice.officeId,
    days: data && data.statusOffice.days,
    dialog,
    toggleDialog,
    setResponsibleDOM,
  };

  return (
    <Context.Provider value={value}>
      <>{loading ? <Linear /> : <>{props.children}</>}</>
    </Context.Provider>
  );
};
