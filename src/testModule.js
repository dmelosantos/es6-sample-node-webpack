/*eslint-env node*/
function testingJestCoverage (param1, param2) {
    if (param1 === '10' || param2 === '21') {
        return param1 + param2;
    }
    return 30;
}

module.exports = testingJestCoverage;
