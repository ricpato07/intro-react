
describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los string', () => {

        const mensaje1 = "hola amigo";
        const mensaje2 = 'hola amigo';

        expect(mensaje1).toBe(mensaje2);
    });
    

})


