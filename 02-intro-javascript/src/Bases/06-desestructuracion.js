//desectructuracion o asignacion desectructurante

const persona = {
    nombre: 'nacho',
    edad: 27,
    clave: 'nashe',
    rango: 'Soldado'
};

const { } = persona;

const useContext = ({nombre, edad, clave, rango = 'Oro 3'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios} = useContext(persona);
console.log(nombreClave, anios);