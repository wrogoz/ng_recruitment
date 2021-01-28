const jwt = require("jsonwebtoken");
const axios = require("axios")

const auth =  async(req, res, next) => {
try {
const u = await axios.post('http://app:3000/auth', {
    username: "basic-thomas",
    password: "sR-_pcoow-27-6PAwCD8"
  })
  .then(function (response) {
    return ':)'
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(u)

} catch (error) {
console.log(error)
}

next()


};

module.exports = auth;