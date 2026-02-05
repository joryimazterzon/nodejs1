/* En Node.js, un stream tipo transform 
recibe datos, los procesa y entrega la información modificada. 
Para crear tu stream personalizado, 
utiliza la clase Transform proporcionada por el módulo stream.
 */

const fs = require('node:fs');

const { Transform, pipeline } = require('node:stream');

const toUpperCase = new Transform({
  // chunk can be a binary buffer or a string
  transform(chunk, encoding, callback) {
    // convert the chunk to a string
    const transformedChunk = chunk.toString().toUpperCase();
    // push the transformed chunk to the output stream
    this.push(transformedChunk);
    // call the callback to indicate that the chunk has been processed
    callback();
  },
});

/**
 * pipeline es una secuencia de streams donde un resultado
 * se convierte en la entrada del siguiente stream.
 *
 * pipeline(source, transform, destination)
 * source: stream de origen
 * transform: stream de transformación
 * destination: stream de destino
 */

pipeline(
  fs.createReadStream('streams/entrada.txt'),
  toUpperCase,
  fs.createWriteStream('streams/salida.txt'),
  (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Pipeline completed successfully');
    }
  },
);
