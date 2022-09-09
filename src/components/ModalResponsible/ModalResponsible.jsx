import React, { useState, useContext } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';

import { Context } from 'components/LayoutContext';
import { getResponsibleList, setNewResponsible } from '../../Api';

import './ModalResponsible.scss';

export function ModalResponsible() {
  const { toggleDialog, dialog, setResponsibleDOM } = useContext(Context);
  const [secondName, setSecondName] = useState('');
  const [branch, setBranch] = useState('');
  const [responsible, setResponsible] = useState('');
  const [responsibleList, setResponsibleList] = useState([]);

  const setList = async () => {
    if (secondName.length > 0 || branch.length > 0) {
      getResponsibleList({
        name: secondName,
        department: branch,
      })
        .then((answer) => {
          setResponsibleList(answer.data);
        })
        .catch((err) => {
          setResponsibleList([]);
          setSecondName('');
          setBranch('');
        });
    }
  };

  const setNew = () => {
    if (responsible) {
      setNewResponsible({
        userId: userId,
        watchDay: dialog.date,
        watcherId: responsible.ID,
        action: 'setDayWatcher',
      });
      setResponsibleDOM({
        ...dialog,
        watcher: {
          ...dialog.watcher,
          name: `${responsible.NAME} ${responsible.LAST_NAME}`,
        },
      });
      toggleDialog(null);
    }
  };

  return (
    <div className='responsible'>
      <DialogTitle id='scroll-dialog-title'>
        Смена ответственного
        <div className='responsible__search'>
          <TextField
            label='Фамилия'
            variant='standard'
            autoComplete='off'
            fullWidth
            value={secondName}
            onChange={(event) => setSecondName(event.target.value)}
          />
          <TextField
            label='Филиал'
            variant='standard'
            autoComplete='off'
            fullWidth
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
          />
          <Button
            variant='outlined'
            onClick={() => setList()}
          >
            Поиск
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <List
          component='nav'
          aria-label='main mailbox folders'
        >
          {responsibleList.map((user) => (
            <ListItemButton
              key={user.ID}
              selected={responsible && responsible.ID === user.ID}
              onClick={() => setResponsible(user)}
            >
              <p className='responsible__row'>
                {user.NAME} {user.LAST_NAME}
                <span>{user.WORK_DEPARTMENT}</span>
              </p>
            </ListItemButton>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggleDialog(null)}>отменить</Button>
        <Button onClick={() => setNew()}>выбрать</Button>
      </DialogActions>
    </div>
  );
}
