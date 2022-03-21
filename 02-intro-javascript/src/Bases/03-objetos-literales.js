//creacion de un objeto
const persona = {
    nombre: 'Nacho',
    apellido: 'Lacioppa',
    edad: 27,
    direccion:{
        ciudad: 'Victoria',
        zip: 90352,
    }
};

const persona2 = {...persona}; //sirve para clonar el objeto y asignarlo a un nuevo espacio en memoria
persona2.nombre = 'Juani';
persona2.apellido = 'Corrio';

console.table(persona);
console.table(persona2);