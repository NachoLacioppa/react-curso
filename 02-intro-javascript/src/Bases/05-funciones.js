//FUNCIONES

const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar('nacho'));



const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2('nachoxxxxxx'));

const getUser = () => ({
        uid: '12345',
        username: 'nacho xd'
});

console.log(getUser);

// function getUserActivo (nombre) {
//     return{
//         uid:'abc444',
//         username: nombre
//     }
// };

const getUserActivo = (nombre)  => ({
        uid:'abc444',
        username: nombre
    
})

const userActivo = getUserActivo('Nachooooooooooooooooooooooooo');
console.log(userActivo);