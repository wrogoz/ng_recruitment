const datejs=require('datejs')


const convertDateToMysql=(date)=>{
    return (Date.parse(date))
}


module.exports=convertDateToMysql
