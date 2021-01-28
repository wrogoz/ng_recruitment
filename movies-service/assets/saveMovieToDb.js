const axios = require('axios');
const db = require('../db_config/db_config')

const saveMovieToDb = async(title,userData,res)=>{
    try {
        const user = userData;

      const sql = `INSERT INTO movies SET?`;
    const movieInfo= await axios
      .get(`http://www.omdbapi.com/?apikey=99e1afc3&t=${title}`)
      .then((response)=> {
        const {Title,Released,Genre,Director}=response.data
        return {
            Title,
            Released:Date.parse(Released),
            Genre,
            Directory:Director,
            User_id:user.userId
        }

      });
      if(!movieInfo.Title){

        res.status(400).send({server:'title not found'})
      }else{
        db.query(sql, movieInfo, (err, result) => {
          if (err) throw err;

          res.status(200).send({'server':'success'});
        });
      }

    } catch (error) {
      res.status(500).send({server:'error'})
    }}

    module.exports = saveMovieToDb