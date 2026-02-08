const tarea1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea 1 completada');
    }, 1000);
  });

const tarea2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea 2 completada');
    }, 1500);
  });

const tarea3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea 3 completada');
    }, 2000);
  });

Promise.all([tarea1(), tarea2(), tarea3()])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

// En todo este proceso no se bloquea el evento loop, es decir,
// no se bloquea el flujo de ejecución del programa.
