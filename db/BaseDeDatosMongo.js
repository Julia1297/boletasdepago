var MongoClient = require('mongodb').MongoClient;
class BaseDeDatosMongo {
  constructor() {
    this.url = 'mongodb+srv://alejandro:Gustavo@cluster0-dp6ry.mongodb.net/test?retryWrites=true';
    this.mongoose=MongoClient;
    this.mongoose.connect(this.url, { useNewUrlParser: true })
      .then(db => console.log("DB conectada"))
      .catch(err => console.log(err));
    
    
  }

  insertarUnaDocumento(documento, nombreCollection) {
    this.mongoose.connect(this.url, function (err, db) {
      if (err) throw err;
      var baseDeDatos = db.db("BoletasDePago");
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
      var baseDeDatos = db.db("BoletasDePago");
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
      var baseDeDatos = db.db("BoletasDePago");
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
      var baseDeDatos = db.db("BoletasDePago");
      baseDeDatos.collection(nombreCollection).deleteOne(query, function (err, obj) {
        if (err) throw err;
        console.log("1 documento Eliminado");
        db.close();
      });
    });
  }
  devolverTodosDeLaCollection(nombreCollection){
    let lista;
    let urlTemp = this.url;
    let mongooseTemp = this.mongoose;
    let promesa =  new Promise(
      function(resolve, reject){
        mongooseTemp.connect(urlTemp, function (err, db) {
          if (err) resolve(null);
          var baseDeDatos = db.db("BoletasDePago");
          baseDeDatos.collection(nombreCollection).find({}).toArray(function(err, result){
            if (err) resolve(null);
            resolve(result);
            db.close();
            
          });
        });
      }
        
    );
    return promesa;
  }
  
}
async function devolverTodos(nombreCollection){
  let lista = await conexion.devolverTodosDeLaCollection(nombreCollection);
  console.log(lista);
}

//Ejepmlos de la base de Datos
let conexion= new BaseDeDatosMongo();
let objeto= { _id:"104",nombre: "Samuel", apellido: "Valverde" };
let objeto2= { _id:"105",nombre: "Jorge", apellido: "Chavez" };
let objetoNuevo= { _id:"104",nombre: "Alvaro", apellido: "Laimee" };
let query = { _id: "104" };
let query2 = {_id: "103"};

conexion.insertarUnaDocumento(objeto,"empleados");
conexion.insertarUnaDocumento(objeto2,"empleados");
conexion.buscarDocumentos(query,"empleados");
conexion.actualizarUnDocumento(query,objetoNuevo,"empleados");
conexion.eliminarUnDocumento(query,"empleados");


devolverTodos("empleados");

