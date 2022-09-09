import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Context } from 'components/LayoutContext';
import { getHistory } from '../../Api';

import './ModalHistory.scss';

export function ModalHistory() {
  const { toggleDialog, officeId } = useContext(Context);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    getHistory({
      userId: userId,
      // userId: 2921,
      action: 'getHistory',
      officeId: officeId,
    }).then((answer) => {
      setHistory(answer.data);
    });
  }, []);

  return (
    <>
      <DialogTitle id='scroll-dialog-title'>История</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        {history?.length > 0 && (
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableBody>
                {history.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      {moment(row.dateHistory)
                        .locale('ru')
                        .format('DD MMMM YYYY')}
                    </TableCell>
                    <TableCell>{row.event}</TableCell>
                    <TableCell>{row.setBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggleDialog(null)}>Закрыть</Button>
      </DialogActions>
    </>
  );
}
