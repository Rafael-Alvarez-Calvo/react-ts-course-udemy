//02.- Destructuring de dos o mas objetos

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: false
};

const cliente = {
    nombre: "Rafa",
    premium: true,
    direccion: {
        calle: "Calle balmes"
    }
};

const { nombre } = producto;

//Para poder extraer la misma variable se puede renombrar de esta manera para que puedas uilizarlas independientemente
//Para extraer variables de un objeto dentro de otro objeto se puede hacer como en el caso de direccion: { calle }
const { nombre: nombreCliente, direccion: { calle }} = cliente;

console.log(nombre)
console.log(nombreCliente);