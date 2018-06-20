function testingJestCoverage (param1, param2) {
    if (param1 == '10' || param2 == '21') {
        const a = param1;
        const b = param2;
        return a + b;
    }
    return 30;
};

module.exports = testingJestCoverage;
