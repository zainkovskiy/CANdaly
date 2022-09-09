import React, { useContext } from 'react';

import { Context } from 'components/LayoutContext';
import { ModalWindow } from 'components/ModalWindow';
import { ModalResponsible } from 'components/ModalResponsible';
import { ModalHistory } from 'components/ModalHistory';
import { Header } from 'components/Header';
import { Title } from 'components/Title';
import { DulyButton } from 'components/DulyButton';
import { Dulys } from 'components/Dulys';
import { Days } from 'components/Days';

export const Layout = () => {
  const { officeName, dialog, toggleDialog } = useContext(Context);

  const getChildren = () => {
    if (dialog === 'story') {
      return <ModalHistory />;
    }
    if (dialog) {
      return <ModalResponsible />;
    }
  };

  return (
    <>
      <Header />
      <Title title='Дежурство ЦАН' />
      <DulyButton />
      <Dulys />
      <Title
        title='Дежурство: '
        buttonName='История'
        onClick={() => toggleDialog('story')}
      >
        {<>{officeName}</>}
      </Title>
      <Days />
      <ModalWindow open={Boolean(dialog)}>{getChildren()}</ModalWindow>
    </>
  );
};
