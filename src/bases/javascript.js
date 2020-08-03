// Variables y constantes
const nombreu = 'Ricardo';
const apellido = 'García';

let valorDato = 5;

console.log(nombreu, valorDato);

//Template string
console.log(`${nombreu} ${apellido}`);

//spread operator
const persona = {
    nombre: "Tony",
    apellido: "Stark"
};


const persona2 = { ...persona };

persona2.nombre = "Peter";

console.log({ persona });
console.log({ persona2 });

console.table(persona);

//Arreglos en javascript
const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(numero){
  return numero * 2;
}
);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

//Funciones

const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}

const getUsuarioActivo = (nombre)=>(
    {
        uid : "abc123",
        username : nombre
    }
)

console.log(saludar2 ('Goku'));
console.log(getUsuarioActivo ('Juan'));

//Desestructuración

const superheroe = {
    nombre : "Tony",
    edad : 45,
    clave: 'Ironman',
    latlng : {
        lat: 14.22344,
        lng: -12.43534
    }
};

const {nombre, edad, latlng: {lat, lng}} = superheroe;

const retornaPersona = ({nombre, rango = 'capitán'}) =>{
 console.log(nombre, rango);
}

console.log(nombre, edad, lat, lng);
retornaPersona(superheroe);

//Desestructuracion de arreglos

const personajes = ['Goku','Vegeta', 'Trunks'];

const [, veg] = personajes;

const retornaArreglo = ()=>{
    return ['ABC', 123];
}

console.log(veg);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor)=>{
    return [valor, ()=> {console.log('Hola mundo');}];
}

const arr = useState("Goku");
const [nom, setNombre] = arr;

console.log(nom);
setNombre();

//Operador ternario
const activo = true;
const mensaje = activo && 'Activo';
console.log(mensaje);




