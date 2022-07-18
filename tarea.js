class Figuras {
    constructor(id, name, precio, stock, cuotas){
        this.id = id;
        this.name = name;
        this.precio = precio;
        this.stock= stock;
        this.cuotas = cuotas || 0;
        this.precioFinalCuotas = "Seleccione las cuotas";
    }
    
    calcularPrecioCuotas(){
        switch(this.cuotas) {
            case "1": 
                const seleccionar = "Seleccione las cuotas"
                this.precioFinalCuotas = seleccionar;
                break;
            case "3":
                let cuota3 = (this.precio / 3);
                this.precioFinalCuotas = Math.round(cuota3);
                break;
            case "6":
                let cuota6 = (this.precio / 6);
                this.precioFinalCuotas = Math.round(cuota6);
                break;
            case "12":
                let cuota12 = (this.precio / 12);
                this.precioFinalCuotas = Math.round(cuota12);
                break;
        }
        return this.precioFinalCuotas;
    }
};