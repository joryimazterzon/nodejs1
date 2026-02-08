console.log('Inicio del programa');

// nextTick se ejecuta antes de que se termine la ejecución del programa
process.nextTick(() => {
  console.log('Ejecutando nextTick process.nextTick() microtask');
});

setTimeout(() => {
  console.log('Ejecutando setTimeout callback');
}, 0);

setImmediate(() => {
  console.log('Ejecutando setImmediate callback');
});

const fs = require('node:fs');

fs.readFile('__filename', 'utf8', (err, data) => {
  console.log('Ejecutando fs.readFile callback');
});

console.log('Fin del programa');

/**
 * Output:
 * Inicio del programa
 * Ejecutando nextTick process.nextTick() microtask
 * Ejecutando setTimeout callback
 * Ejecutando setImmediate callback
 * Ejecutando fs.readFile callback
 * Fin del programa
 */
