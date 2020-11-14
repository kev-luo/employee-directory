import React, { useContext } from 'react';

import { API } from './API';

const PeopleContext = React.createContext();

const PeopleProvider = async () => {
  let { data: peopleArray } = await API.searchPeople();

  return <PeopleContext.Provider value={ peopleArray } />
}

const usePeopleContext = () => {
  return useContext(PeopleContext);
}

export { PeopleProvider, usePeopleContext };