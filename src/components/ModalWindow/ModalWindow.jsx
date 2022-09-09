import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';

import { Context } from 'components/LayoutContext';

export const ModalWindow = (props) => {
  const { toggleDialog } = useContext(Context);
  return (
    <Dialog
      {...props}
      maxWidth='lg'
      onClose={() => toggleDialog(null)}
      fullWidth={true}
      sx={{ zIndex: 999 }}
      scroll={'paper'}
    >
      {props.children}
    </Dialog>
  );
};
