//Hadde glemt noe her, la til test for alle filer som inneholder dette osv. For bedre test-coverage. 

module.exports  = {
  preset: 'react-scripts',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  testEnvironment: 'jest-environment-jsdom',
  }