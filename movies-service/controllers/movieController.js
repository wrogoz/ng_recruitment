const db = require("../db_config/db_config");
const axios = require('axios');
const datejs=require('datejs');
const saveMovieToDb=require('../assets/saveMovieToDb')

const getAllmovies = (err, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

const addMovie = async (req, res) => {


const user = req.body.user;
if(user.role==='premium'){
  saveMovieToDb(req.body.title,user,res)
}else{
  db.query("SELECT COUNT(*) AS count FROM movies WHERE user_id=?",user.userId,(err,result)=>{
    if(err)throw err;

   result[0].count<5? saveMovieToDb(req.body.title,user,res):res.send('to many movies');




})
}









};

module.exports = { getAllmovies, addMovie };
