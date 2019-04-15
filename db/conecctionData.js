const sqlite3 = require('sqlite3');
let db = new sqlite3.Database("./wea.db");
const insertData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO TajetaDeVenta (montoVendido,fecha) VALUES (1900,"25/4/2019")');
}
insertData();
db.close();