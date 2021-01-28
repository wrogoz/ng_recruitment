const db=require('../db_config/db_config')
const express=require('express')
const router=express.Router();
const auth=require('../middleware/auth')
const checkUserType = require('../middleware/userValidation.js')
const {getAllmovies,addMovie} = require('../controllers/movieController')


router.get('/', getAllmovies);

router.post('/',auth,addMovie);

module.exports=router