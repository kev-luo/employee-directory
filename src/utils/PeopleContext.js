import React, { useContext, useReducer } from 'react';

import { getUsers } from './API';

const PeopleContext = React.createContext();

function reducer(state, action) {
  switch(action.type) {
    case 'SORT':
      return state;
    default: 
      return state;
  }
}

const PeopleProvider = async () => {
  let { data: { results: users } } = await getUsers.searchPeople();

  const [state, dispatch] = useReducer(reducer, users);

  return <PeopleContext.Provider value={ [state, dispatch] } />
}

const usePeopleContext = () => {
  return useContext(PeopleContext);
}

export { PeopleProvider, usePeopleContext };