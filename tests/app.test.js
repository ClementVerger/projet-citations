const citationAleatoire = require('../src/app');

test('la fonction retourne un citation', () => {
    const result = citationAleatoire();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
});
