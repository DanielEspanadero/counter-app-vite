test('Prueba que no puede fallar', () => {
    if (0 === 1) {
        throw new Error('No se puede dividir entre cero.')
    };
});