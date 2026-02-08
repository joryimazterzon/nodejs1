// Crear un generator que genere los numeros de la secuencia de Fibonacci de forma asincrona

function* fibonacci() {
  let current = 0,
    next = 1;
  while (true) {
    yield current; // yield es un operador que devuelve el valor del generador

    [current, next] = [next, current + next];
  }
}

const fibonacciGenerator = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(`Dentro del bucle ${i}: ${fibonacciGenerator.next().value}`);
}

console.log(fibonacciGenerator.next().value);
console.log(fibonacciGenerator.next().value);
