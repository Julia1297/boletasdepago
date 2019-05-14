var MongoClient = require('mongodb').MongoClient;

class CRUDRepositorioEmpleadoMongo {
  constructor() {
    this.empleadoRepository = new EmpleadoRepository();
    this.baseDeDatos = this.empleadoRepository.db;
  }
  insertarEmpleado(empleado) {
      this.baseDeDatos.collection("empleado").insertOne(documento, function (err, res) {
        if (err) throw err;
        console.log("1 empleado insertado");
        db.close();
      });
  }

  buscarEmpleado(empleado) {
      this.baseDeDatos.collection("empleado").find({_id: empleado._id}).toArray(function (err, result) {
        if (err) throw err;
          console.log(result);
          db.close();
      });
  }

  actualizarEmpleado(empleado, nuevosValores) {
      this.baseDeDatos.collection("empleado").updateOne({_id: empleado._id},{$set:nuevosValores} , function (err, res) {
        if (err) throw err;
        console.log("1 empleado actualizado");
        db.close();
      });
  }

  eliminarEmpleado(empleado) {
      this.baseDeDatos.collection("empleado").deleteOne({_id: empleado._id}, function (err, obj) {
        if (err) throw err;
        console.log("1 empleado eliminado");
        db.close();
      });
  }
  devolverTodosLosEmpleado(){
    let lista;
    let urlTemp = this.url;
    let mongooseTemp = this.mongoose;
    let promesa =  new Promise(
      function(resolve, reject){
          this.baseDeDatos.collection("empleado").find({}).toArray(function(err, result){
            if (err) resolve(null);
            resolve(result);
            db.close();
          });
      }
    );
    return promesa;
  }
  
}