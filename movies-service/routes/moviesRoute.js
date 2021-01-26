const db=require('../db_config/db_config')
const express=require('express')
const router=express.Router();
const {getAllmovies,addMovie} = require('../controllers/movieController')


router.get('/', getAllmovies);

router.post('/', addMovie);

module.exports=router