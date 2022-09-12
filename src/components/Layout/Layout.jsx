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
      <Title
        title='Дежурство по компании'
        tooltip={toolTipTitle.one}
      />
      <DulyButton />
      <Dulys />
      <Title
        title='Дежурный по офису  '
        buttonName='История'
        tooltip={toolTipTitle.two}
        onClick={() => toggleDialog('story')}
      >
        {<>{officeName}</>}
      </Title>
      <Days />
      <ModalWindow open={Boolean(dialog)}>{getChildren()}</ModalWindow>
    </>
  );
};

const toolTipTitle = {
  one: 'Данный блок отвечает за Дежурство по Центральному АН. Указанные ответственные лица дежурят с 19 до 21-00 в будние дни, с 16 до 21-00 по субботам и с 9 до 21-00 в воскресенье, и Лиды с соответствующего берега, при отсутствии квалификации, либо отвеченного звонка, будут перераспределятся на данных сотрудников через 10 минут после создания.',
  two: 'Данный блок отвечает за дежурство по офису в указанные дни. На каждый день должен быть указан ответственный сотрудник в пределах офиса. Лиды с не отвеченными вызовами в рамках дежурства, будут сразу после создания назначены на соответствующих сотрудников',
};
