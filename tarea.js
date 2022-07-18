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

localStorage.clear();

const productos = [];
let carrito =[];

const figura1 = new Figuras(1, "lionel Messi",10000, 5);
const figura2 = new Figuras(2, "Cristiano Ronaldo", 9000,5);
const figura3 = new Figuras(3, "Kilian Mbappe", 5000, 5);
const figura4 = new Figuras(4, "Karim Benzema", 7000, 5);


productos.push(figura1, figura2, figura3, figura4);


const divContenedor = document.getElementById("section");


for(const producto of productos){
  
    const div = document.createElement("div");
   
    div.className = "col w-100 d-flex d-flex justify-content-evenly ";
   
    div.innerHTML = `
                <h3 class="fs-4">Producto: ${producto.name}</h3>
                <h3 class="fs-5">Precio: ${producto.precio}</h3>
                <p class="fs-5">Seleccione la cantidad de cuotas: 
                    <select id=${producto.id}>
                        <option value="1">Seleccione las cuotas</option>
                        <option value="3">3 cuotas</option>
                        <option value="6">6 cuotas</option>
                        <option value="12">12 cuotas</option>
                    </select>
                </p>
                <button type="button" id=boton-${producto.id} class="btn btn-outline-black">Agregar al carrito</button>
                <p id=precio-${producto.id}>El precio de cada cuota es: $ ${producto.precioFinalCuotas}</p>
                `;
       
        divContenedor.append(div);

       
        const select = document.getElementById(`${producto.id}`);
      
        select.addEventListener("change", () => {
           
            cambioCuotas(select.value, producto);  
        });

        
        const boton = document.getElementById(`boton-${producto.id}`);
        boton.addEventListener("click", () => {
            

      
            const obtenerCarrito = localStorage.getItem("carrito")
            
            if(obtenerCarrito){
                carrito = JSON.parse(obtenerCarrito);
            }
        
            carrito.push(producto);
            const carritoStorage = JSON.stringify(carrito);
            localStorage.setItem("carrito", carritoStorage);
            console.log("El producto fue añadido")
        });
};


function cambioCuotas(cuota, producto){
    producto.cuotas = cuota;
    const precioFinalCuotas = producto.calcularPrecioCuotas();
    document.getElementById(`precio-${producto.id}`).innerHTML = `El precio de cada cuota es: $ ${precioFinalCuotas}`
};