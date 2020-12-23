import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all users
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};

// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
