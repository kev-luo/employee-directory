import axios from 'axios';

export const getUsers = {
  searchPeople: function() {
    return axios.get(
      "https://randomuser.me/api/?results=100"
    );
  }
};