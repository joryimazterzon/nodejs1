/*
Ejercicio:
Crear un stream que lea cada linea del archivo contenido.txt y 
coloque en mayusculas cada linea y lo escriba en el archivo contenido-mayusculas.txt
*/

const fs = require('node:fs');
const { Transform, pipeline } = require('node:stream');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: fs.createReadStream('streams/contenido2.txt'),
  crlfDelay: Infinity,
  output: process.stdout,
  terminal: false,
});

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = `${chunk.toString().toUpperCase()}\n`;
    this.push(transformedChunk);
    callback();
  },
});

pipeline(
  rl,
  toUpperCase,
  fs.createWriteStream('streams/contenido-mayusculas.txt'),
  (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Pipeline completed successfully');
    }
  },
);
