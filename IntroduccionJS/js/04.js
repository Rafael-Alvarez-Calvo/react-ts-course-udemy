//04.- Array Methods

const tecnologias = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];
const numeros = [10, 20, 30];

//Filter
const nuevoArray = tecnologias.filter(tech => tech === "HTML");
const resultado = numeros.filter(num => num > 10);
//Output: Array con los elementos que cumplan la condicion

//Includes
const isCssInArray = tecnologias.includes("CSS");
const isEightInArray = numeros.includes(8);
//Output: boolean true si lo encuentra y false sino


//Some -> Devuelve un boolean si al menos unoi cumple con la condicion
const isSomeHeigherThanFifteenInArray = numeros.some(num => num > 15);

//Find -> Devuelve el primer elemento solo que cumple la condicion en forma nativa no en array
const firstHeigherThanFifteen = numeros.find(num => num > 15);

//Every -> Devuelve true o false si todos cumplen la condicion
const isEveryHeigherThanFifteenInArray = numeros.find(num => num > 15);

//Reduce -> Retorna un acumulado del total
//El total corresponde al valor previo al numero por el que itera en el array
//El numero corresponde al valor que está iterando en el array
//El 0 corresponde al valor inicial del que se parte
const reducer = numeros.reduce((total, numero) => {
    return total + numero;
}, 0)



console.log(nuevoArray);
console.log(resultado);
console.log(isCssInArray);
console.log(isEightInArray);
console.log(isSomeHeigherThanFifteenInArray);
console.log(firstHeigherThanFifteen);
console.log(isEveryHeigherThanFifteenInArray);
console.log(reducer);

