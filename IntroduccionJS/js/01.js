//01.- Manipulación de Objetos

const producto = {
    nombre: "Tablet",
    precio: 100,
    disponible: false
};

//Evita cualquier alteración del objeto
Object.freeze(producto);

//Permite modificar las propiedades existentes pero no permite ni añadir nuevas ni eliminar existentes
Object.seal(producto);

//Cambiar valor key existente
producto.disponible = true;

//eliminar propiedad
delete producto.precio;

//añadir key sino existe
producto.imagen = "imagen.jpg";

console.log(producto);