const axios=require('axios')
const getToken = async(user,password)=>{
    try {
        axios
        .post("http://app:3000/auth", {
          username: user,
          password: password,
        })
        .then(function (response) {
          return response.data.token;
        })
        .catch(function (error) {
          console.log(error);
          return 'refusal'
        });
    } catch (error) {
      return 'error'
    }

}

module.exports=getToken