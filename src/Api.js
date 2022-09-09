import axios from 'axios';

export const connectToServer = async (resObject) => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/WatchUsers/Controller.php',
    resObject
  );
};
export const getResponsibleList = async (resObject) => {
  return await axios.post(
    'https://crm.centralnoe.ru/dealincom/connector/findUsers.php',
    resObject
  );
};
export const setNewResponsible = async (resObject) => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/WatchUsers/Controller.php',
    resObject
  );
};
export const getHistory = async (resObject) => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/WatchUsers/Controller.php',
    resObject
  );
};
