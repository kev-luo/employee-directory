import React, { useContext } from 'react';

import { getUsers } from './API';

const PeopleContext = React.createContext();

const PeopleProvider = async () => {
  let { data } = await getUsers.searchPeople();

  return <PeopleContext.Provider value={ data } />
}

const usePeopleContext = () => {
  return useContext(PeopleContext);
}

export { PeopleProvider, usePeopleContext };