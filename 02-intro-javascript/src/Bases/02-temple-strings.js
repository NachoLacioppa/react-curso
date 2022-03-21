//Template strings

const nombre = 'Nacho';
const apellido = 'Lacioppa';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Holis' + nombre;
}

console.log(`Esto es un saludo: ${getSaludo(nombreCompleto)}`);