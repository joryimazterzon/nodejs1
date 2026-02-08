function operacionCompleja() {
  debugger; // detiene la ejecución del programa y permite inspeccionar el estado de la ejecución
  console.time('operacionCompleja');
  console.log('Iniciando operacionCompleja');
  for (let i = 0; i < 10000; i++) {
    Math.sqrt(i);
  }
  console.timeEnd('operacionCompleja'); // mide tiempo de ejecución de ciertos códigos
  console.trace('Fin de operacionCompleja'); // muestra el stack trace de la ejecución
}

function operacionA() {
  operacionCompleja();
}

function operacionB() {
  operacionA();
}

operacionB();

// ejecutar con node --inspect-brk index.js
// abrir chrome://inspect en el navegador
// click en "Open dedicated DevTools for Node"
// click en "inspect"
// click en "console"
// click en "console"
