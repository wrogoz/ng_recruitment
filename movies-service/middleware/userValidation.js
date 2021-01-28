const db = require('../db_config/db_config');


const checkUserType = async(req,res,next)=>{
    try {

        if(req.body.user.role==='basic'){

            const setValue = async (value)=>{
                try {
                   req.body.counting=await value
                } catch (error) {
                    console.log('ja jebie')
                }

              }
              const checkCount = (userId)=>{
                db.query("SELECT COUNT(*) AS count FROM movies WHERE user_id=?",userId,(err,result)=>{
                  if(err)throw err;
                 setValue(result[0].count)
                 next()
              })
              }

                checkCount(user.userId)







    }else{
        next()
    }

}
  catch (error) {

    }

}
module.exports=checkUserType