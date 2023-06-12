function updateItems(){
    let res 
    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "pn_yp",
        password: "1234567890"
    });
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else{
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
        connection.query("SELECT * FROM tabl",
    function(err, results, fields) {
        console.log(err);
        res = results
        console.log(results); // собственно данные
        console.log(fields); // мета-данные полей 
    });
    console.log(res)
}
updateItems()