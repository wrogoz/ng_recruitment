const jwt = require("jsonwebtoken");
const axios = require("axios")

const auth =  async(req, res, next) => {
try {
  axios.post('0.0.0.0:3000/auth', {
    username: "basic-thomas",
    password: "sR-_pcoow-27-6PAwCD8"
  })
  .then(function (response) {
    console.log(`:)`);
  })
  .catch(function (error) {
    console.log(error);
  });
} catch (error) {
console.log(error)
}
next()


};

module.exports = auth;