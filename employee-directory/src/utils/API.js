import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUsers: function () {
    return axios.get("https://randomuser.me/api/?page=5&results=10&seed=abc");
  },
};
