/**
 * Application entry point
 */
const library = require('es6-sample-library');

// Load application styles
import 'styles/index.scss';
import testingJestCoverage from 'src/testModule';

console.log(testingJestCoverage(20,30));

// ================================
// START YOUR APP HERE
// ================================
console.log(library.distanceBetweenCoordinates(-19.81, -43.95, -19.22, -42.48));
