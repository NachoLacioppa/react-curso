import { heroes } from './Bases/data/heroes';
console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id) return true;
        else return false;
    } 
    );
}

//console.log(getHeroeById(1));



const getHeroeByOwner = (own) => {
    return heroes.filter( (heroe) => {
        if(heroe.owner === own) return true;
        else return false;
    } 
    );
}

console.log(getHeroeByOwner('Marvel'));


