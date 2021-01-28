const jwt = require("jsonwebtoken");
const axios = require("axios");

const auth = async (req, res, next) => {
  try {
    let token = req.header("access-token")
    if (!token) {
      // zrobic funkcje
       token = await axios
        .post("http://app:3000/auth", {
          username: req.body.username,
          password: req.body.password,
        })
        .then(function (response) {
          return response.data.token;
        })
        .catch(function (error) {

          return 'refusal'
        });

      if(token==='refusal'){
        res.status(401).send({server:'wrong username or password'})
      }
      else {
            // zamienic secret na process.env.secret
        const decodedToken = jwt.verify(token, 'secret');

        req.body.user = decodedToken;
        next();
      }
    }
    else{
       // zamienic secret na process.env.secret
      const decodedToken = jwt.verify(token, 'secret');

        req.body.user = decodedToken;
        next();
    }
  } catch (error) {

    res.status(500).send({error:error.data})
  }
};

module.exports = auth;
