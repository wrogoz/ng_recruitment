const jwt = require("jsonwebtoken");
const axios = require("axios")

const auth = async (req, res, next) => {
  try {
    const token = req.header("access-token");
    if (!token) {

     axios({
        method: 'post',
        url: 'app:3000/auth',

        data: {
          username: req.body.username,
            password: req.body.password
        }
      })
          .then(function (response) {
            console.log('lolo')

          })
          .catch(function (error) {
            console.log(error);
          })
next();

}
    else{
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = decodedToken;
    next();
    }

  } catch (error) {
    res.status(500).send({ server_error: error });
  }
};

module.exports = auth;