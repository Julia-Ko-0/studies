
const mysql = require("mysql2")

const connect = mysql.createConnection({
    host: "localhost",
    user:"root",
    database:"newschema",
    password:"1234567890"
})
connect.connect((err)=>{
    if(err){
        return console.log("Ошибка"+ err.message)
    }
    else{
        console.log("Подключение успешно")
    }
})
connect.query("SELECT * FROM exam_marks",
    function(err,res,fields){
        console.log(err)
        console.log(res)
        console.log(fields)

    }
)
connect.query("INSERT INTO exam_marks VALUES (1,12,43,4,null)",(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Данные доб")
    }
})
// connect.end((err)=>{
//     if(err){
//         return console.log("Ошибка"+ err.message)
//     }
//     console.log("Подключение закрыто")
// })