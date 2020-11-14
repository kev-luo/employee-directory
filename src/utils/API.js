import axios from 'axios';

export const getUsers = {
  searchTerms: function() {
    return axios.get(
      "https://randomuser.me/api/?results=20"
    );
  }
};