import BoletaDePago from "../boleta/boletaDePago";
import Empleado from "../empleado/Empleado.js"
import AsistenciaPorDia from "../tarjetas/AsistenciaPorDia";
import TarjetaAsistencia from "../tarjetas/TarjetaAsistencia";
import CalculadoraPorHora from "../calculadoraSalario/CalculadoraPorHora";
import ClasificadorDeFechaDePagoFijo from "../calculadoraFechaDePago/ClasificadorFechaDePagoFijo";
import ClasificadorDeFechaDePagoPorHora from "../calculadoraFechaDePago/ClasificadorFechaDePagoPorHora";
import ClasificadorDeFechaDePagoPorComision from "../calculadoraFechaDePago/ClasificadorFechaDePagoPorComision";
import MetodoDePago from "../metodoDePago/MetodoDePago";
import TarjetaVenta from "../tarjetas/TarjetaVenta";
import Facebook from "../notificaciones/Facebook";
class Interactor {
    constructor(repositorio) {
        this.repositorio = repositorio;
        this.listaDeEmpleados = [];
    }
    generarBoletasDePagoParaTodosLosEmpleados()
    {
        for (let empleado of this.empleados) {
            let boletaDePago = new BoletaDePago();
            boletaDePago = boletaDePago.generarBoleta(empleado);
            this.boletasGeneradas.push(boletaDePago);
        }

    }
    crearEmpleadoNuevo(datosEmpleado)
    {
        var calculadora, clasificador;
        if(datosEmpleado.tipo == 'Fijo') {
            calculadora = new CalculadoraPorFijo(datosEmpleado.salario,datosEmpleado.fechaIncioLaboral);
            clasificador = new ClasificadorDeFechaDePagoPorFijo();
        }
        if(datosEmpleado.tipo == 'Parcial') {
            var tarjetaAsistencia = new TarjetaAsistencia();
            calculadora = new CalculadoraPorHora(datosEmpleado.montoPorHora, tarjetaAsistencia);
            clasificador= new ClasificadorDeFechaDePagoPorHora();
        }
        if(datosEmpleado.tipo == 'Comision') {
            var tarjetaVenta = new TarjetaVenta();
            calculadora = new CalculadoraPorComison(datosEmpleado.salarioBase,datosEmpleado.comision, tarjetaVenta);
            clasificador= new ClasificadorDeFechaDePagoPorComision();
        }

        let metodoDePago = new MetodoDePago(datosEmpleado.metodoDePago);

        let empleado = new Empleado(datosEmpleado.nombre, datosEmpleado.ci, calculadora, clasificador, metodoDePago);
        datosEmpleado.metodosDeNotificacion.forEach(metodoNotificacion, () => {
            if(metodoNotificacion =='Facebook')
                empleado = new Facebook(empleado);
            if(metodoNotificacion =='Whatsapp')
                empleado = new Whatsapp(empleado);
            if(metodoNotificacion =='Email')
                empleado = new Email(empleado);

        });

        this.repositorio.insertarEmpleado(empleado);
    }
    verDatosEmpleado(ci){

    }
    actualizarEmpleado(empleado, datosNuevoEmpleado){
        this.repositorio.actualizarEmpleado(empleado, datosNuevoEmpleado);
    }

}