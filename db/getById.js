const sqlite3 = require('sqlite3');
let db = new sqlite3.Database("./wea.db");
function getByid(id){
    var query = "SELECT * FROM TajetaDeVenta WHERE id = " + id;
    db.all(query, function (err, rows) {
        if(err){
            console.log(err);
        }else{
            console.log(rows[0]);
        }
    });
}
getByid(10);


db.close();
