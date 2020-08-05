import {saludar, getUser, getUsuarioActivo} from '../../bases/javascript';

describe('Pruebas de javascript.js', () => {

    test('prueba en método saludar', () => {
        const nombre = 'Ricardo';
        const saludo = saludar(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })

    test('getUser debe retornar un objeto', () => {
        
        const userTest ={
            uid : "abc123",
            username : 'El_papi'
        }

        const user = getUser();

        expect(userTest).toEqual(user);
    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const username = 'Juan';

        const userTest ={
            uid : "abc123",
            username : username
        }

        const user = getUsuarioActivo(username);

        expect(userTest).toEqual(user);
    })
    
})
