const mongoose = require('mongoose');
class Email {
 constructor(){
    this.mongoose.connect('mongodb://localhost/BoletasBd', { useNewUrlParser: true })
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));
    this.url = 'mongodb://localhost/BoletasBd';


 }
//connect to db


create(){
    this.mongoose.connect(this.url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}



readOne(){
    this.mongoose.connect(this.url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
    });
}



Query(){
    this.mongoose.connect(this.url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    });
}

Delete(){

    this.mongoose.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myquery = { address: 'Mountain 21' };
        dbo.collection("customers").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });
}

}



