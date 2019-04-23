var MongoClient = require('mongodb').MongoClient;
class BaseDeDatosMongo {
  constructor() {
    this.mongoose=MongoClient;
    this.mongoose.connect('mongodb://localhost/BoletasBd', { useNewUrlParser: true })
      .then(db => console.log("DB conectada"))
      .catch(err => console.log(err));
    this.url = 'mongodb://localhost/BoletasBd';
    
  }

  insertarUnaDocumento(documento, nombreCollection) {
    this.mongoose.connect(this.url, function (err, db) {
      if (err) throw err;
      var baseDeDatos = db.db("BoletasBd");
      baseDeDatos.collection(nombreCollection).insertOne(documento, function (err, res) {
        if (err) throw err;
        console.log("1 documento insertado");
        db.close();
      });
    });
  }


  buscarDocumentos(query, nombreCollection) {
    this.mongoose.connect(this.url, function (err, db) {
      if (err) throw err;
      var baseDeDatos = db.db("BoletasBd");
      //var query = { address: "Park Lane 38" };
      baseDeDatos.collection(nombreCollection).find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
  }

  actualizarUnDocumento(query, nuevosValores,nombreCollection) {
    this.mongoose.connect(this.url, function (err, db) {
      if (err) throw err;
      var baseDeDatos = db.db("BoletasBd");
      baseDeDatos.collection(nombreCollection).updateOne(query,{$set:nuevosValores} , function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
  }

  eliminarUnDocumento(query, nombreCollection) {
    this.mongoose.connect(this.url, function (err, db) {
      if (err) throw err;
      var baseDeDatos = db.db("BoletasBd");
      baseDeDatos.collection(nombreCollection).deleteOne(query, function (err, obj) {
        if (err) throw err;
        console.log("1 documento Eliminado");
        db.close();
      });
    });
  }

}

//Ejepmlos de la base de Datos
let conexion= new BaseDeDatosMongo();
let objeto= { _id:"100",nombre: "Alvaro", apellido: "Cuiza" };
let objetoNuevo= { _id:"100",nombre: "Alejandro", apellido: "Laime" };
let query = { _id: "100" };

conexion.insertarUnaDocumento(objeto,"empleados");

conexion.buscarDocumentos(query,"empleados");

conexion.actualizarUnDocumento(query,objetoNuevo,"empleados");

conexion.buscarDocumentos(query,"empleados");

conexion.eliminarUnDocumento(query,"empleados");




