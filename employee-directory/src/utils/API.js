import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUser: function () {
    return axios.get({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function (data) {
        console.log(data);
      },
    });
    // axios.get("https://dog.ceo/api/breeds/image/random");
  },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};
