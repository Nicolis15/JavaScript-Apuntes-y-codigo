const { default: test } = require('node:test');
const addFive = require('./Pruebas unitarias.js');

test('returns the number plus 5',()=>{
    exportAllDeclaration(addFive(1)).toBe(6);
});



