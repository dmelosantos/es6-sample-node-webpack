const library = require('es6-sample-library');

describe('Testing the inclusion of outsid github releases', () => {
    it('', async (done) => {
        expect(library.distanceBetweenCoordinates(-19.81, -43.95, -19.22, -42.48)).toBe(167.45);
        done();
    });
});
