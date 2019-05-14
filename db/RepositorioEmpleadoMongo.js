class RepositorioEmpleadoMongo {
    constructor() {
      this.url = 'mongodb+srv://alejandro:Gustavo@cluster0-dp6ry.mongodb.net/test?retryWrites=true';
      this.mongoose=MongoClient;
      this.mongoose.connect(this.url, { useNewUrlParser: true })
        .then(db => console.log("DB conectada"))
        .catch(err => console.log(err));
      this.db = this.mongoose.db("BoletasDePago");
    }
  }