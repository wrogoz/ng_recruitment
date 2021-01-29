const db = require("../db_config/db_config");
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
  db.query("SELECT COUNT(*) AS count FROM movies  WHERE user_id=?",user.userId,(err,result)=>{
    if(err)throw err
      if(result[0].count===0){
        saveMovieToDb(req.body.title,user,res)
      }else{
        const sql=`SELECT
                    COUNT(*)AS count
                  FROM movies
                  WHERE user_id=? && DATE_FORMAT(created_at, ' %b %Y') = DATE_FORMAT(NOW(), ' %b %Y')
                  GROUP BY DATE_FORMAT(created_at, ' %b %Y')`
        db.query(sql,user.userId,(err,result)=>{
          if(err)throw err;

         result[0].count<5? saveMovieToDb(req.body.title,user,res):res.status(403).send({server:'You reached limit on this month - if You want to add more movies buy a premium account'});
      })
      }
  })


}
};

module.exports = { getAllmovies, addMovie };
