//Optional chaining (?)

const alumno = {
    nombre: "Rafael",
    Edad: 31,
    aprobado: true,
    examenes: {
        examen1: "90/100"
    }
}

console.log(alumno.examenes?.examen1);
//Devuelve el valor ya que existe examenes y examen 1

console.log(alumno.curso?.nombre);
//Devuelve undefined porque curso no existe pero no da error ya que tiene el optional chaining


//Nullish coalescing operator (??)
//Retorna el operando de la derecha cuando el de la izquierda es null o undefined

const pagina = null ?? 1;
const indice = 4 ?? 1;

console.log(pagina);
console.log(indice);
