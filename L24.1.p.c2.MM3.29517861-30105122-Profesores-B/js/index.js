import Cl_profesor from "./Cl_profesor";
import Cl_fijo from "./Cl_fijo";
import Cl_contratado from "./Cl_contratado";

export default class Cl_main {
    constructor() {
        let uni = new uni();
        let cont = new Cl_contratado("Rafael", 30, 15);
        let cont2 = new Cl_contratado("Felicia", 30, 20);

        uni.procesar(cont)
        uni.procesar(cont2)

        let salida=document.getElementById("salida")
        salida.innerHTML = `nombre del profesor contratado: ${cont.nombre}<br>
        monto del bono: ${cont.bono}<br>
        cantidad de horas: ${cont.sueldo}<br>
        Ingreso total del profesor ${cont.calcularIngresoTotalF()}:<br>
        nombre del profesor contratado: ${cont2.nombre()}<br>
        monto del bono: ${cont2.getbono()}<br>
        cantidad de horas: ${cont2.getsueldo()}<br>
        Ingreso total del profesor: ${cont2.calcularIngresoTotalF()}`
    }
}