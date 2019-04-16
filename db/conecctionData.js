
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './wea.db',
  define: {
    timestamps: false
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })


const Tarjeta = sequelize.define('tarjetas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  montoVendido: Sequelize.INTEGER,
  fecha: Sequelize.STRING,
  ciEmpleado: Sequelize.INTEGER
})

Tarjeta.create({ montoVendido: 100, fecha: "Doe", ciEmpleado: 1 });



Tarjeta.findAll({ attributes: ['id', 'montoVendido', 'fecha', 'ciEmpleado'] })
  .then(tarjetas => {
    console.log(JSON.stringify(tarjetas))
  })
  .catch(err => {
    console.log(err)
  })


