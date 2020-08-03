
import { getHeroeById } from './bases/buscar';

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se encontró ningún resultado");
            }
        }, 2000);

    });
}

getHeroeByIdAsync(2)
    .then(heroe => {
        console.log(heroe);
    })
    .catch(err => {
        console.error(err);
    })



