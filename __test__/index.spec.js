const library = require('es6-sample-library');
const testingJestCoverage = require('../src/testModule');

describe('Testing the inclusion of outsid github releases', () => {
    it('should fail', async (done) => {
        expect(testingJestCoverage(9,21)).toEqual(30);
        done();
    });
});
