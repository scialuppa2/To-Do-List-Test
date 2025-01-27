const calculateStandardDeviation = require('../src/UnitTestNumbers');

describe('Numbers', () => {
    // Controllo della lunghezza di Numbers
    test('Lunghezza di Numbers', () => {
        const numbers = [1, 2, 3];
        expect(numbers.length).toBeGreaterThan(0);
    });

    // Controllo se Numbers è un array vuoto
    test('Array vuoto', () => {
        expect(() => calculateStandardDeviation([])).toThrow('Array must not be empty');
    });

    // Controllo se l'array Numbers contiene numeri nulli
    test('Numeri nulli', () => {
        const numbers = [0, 0, 0];
        expect(calculateStandardDeviation(numbers)).toBe(0);
    });

    // Controllo se l'array Numbers ha un solo numero
    test('Contiene un solo numero', () => {
        const numbers = [5];
        expect(calculateStandardDeviation(numbers)).toBe(0);
    });

    // Controllo se l'array Numbers ha numeri positivi
    test('Solo numeri positivi', () => {
        const numbers = [1, 2, 3];
        expect(calculateStandardDeviation(numbers)).toBeCloseTo(Math.sqrt(2 / 3), 10);
    });

    // Controllo se l'array ha numeri negativi
    test('Solo numeri negativi', () => {
        const numbers = [-1, -2, -3];
        expect(calculateStandardDeviation(numbers)).toBeCloseTo(Math.sqrt(2 / 3), 10);
    });

    // Controllo se l'array ha numeri misti
    test('Numeri misti', () => {
        const numbers = [-1, 0, 1];
        expect(calculateStandardDeviation(numbers)).toBeCloseTo(Math.sqrt(2 / 3), 10);
    });
});
