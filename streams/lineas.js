const fs = require('node:fs');

const readline = require('node:readline');


async function leerLineas() {
    const fileStream = fs.createReadStream('streams/contenido.txt','utf8');
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity, // treat \n and \r\n as the same line ending
            output: process.stdout,
            terminal: false
        });

        for await (const line of rl) {
            console.log(`Line from file: ${line}`);
        }
}

leerLineas('streams/entrada.txt').catch(err => console.error('Error:', err));