/* eslint-disable react-hooks/rules-of-hooks */
//const personajes = ['Nacho', 'Daniel', 'Alfa'];
//const [, , p3] = personajes;
//console.log(p3);

/*const retornaArreglo = () => {
    return ['ABC', 123];
}
*/
//const [letras, numeros] = retornaArreglo();
//console.log(letras, numeros);

//console.log(retornaArreglo);

//tarea
const useState = (valor) => {
    return [valor, () => { console.log('hola') } ];
}

const [nombre, setnombre] = useState('XD');
console.log(nombre);
setnombre();

