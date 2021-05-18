import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUsers: function () {
    return axios.get(
      "https://randomuser.me/api/?page=5&results=100&seed=abc&nat=us"
    );
  },
};

// Filter employees based on name
// Get search value
// on form submit, call function that filters employees and sets state of results array
