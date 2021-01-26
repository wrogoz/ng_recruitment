const db = require("../db_config/db_config");
const axios = require('axios');
const datejs=require('datejs')
const getAllmovies = (err, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

const addMovie = async (req, res) => {
  try {
    const sql = `INSERT INTO movies SET?`;
    const movieInfo= await axios
      .get(`http://www.omdbapi.com/?apikey=99e1afc3&t=${req.body.title}`)
      .then((response)=> {
        const {Title,Released,Genre,Director}=response.data
        return {
            Title,
            Released:Date.parse(Released),
            Genre,
            Directory:Director
        }

      });


    db.query(sql, movieInfo, (err, result) => {
      if (err) throw err;

      res.status(200).send({'server':'success'});
    });

  } catch (error) {
      res.status(500).send(error)
  }
};

module.exports = { getAllmovies, addMovie };
