import { getHeroeById } from "../../bases/buscar";
import heroes from '../../data/heroes';

describe('Prueba en buscar.js', () => {
    
    test('getHeroeById debe retornar un valor válido', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData)
    })

    test('getHeroeById debe retornar un undefiend',() => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    })
    

})
