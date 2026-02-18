const pino = require('pino');
const isProduction = process.env.NODE_ENV === 'production';

const developmentConfig = {
  level: 'debug',
  transport: {
    target: 'pino-pretty', // para que se vea bonito en la consola
    options: {
      colorize: true, // para que se vea bonito en la consola
      ignore: 'pid,hostname', // para que no se vea el pid y el hostname
      translateTime: 'HH:MM:ss', // para que se vea  hora en el formato dd-mm-yyyy HH:MM:ss
    },
  },
};

const productionConfig = {
  level: 'info',
  transport: {
    target: 'pino/file',
    options: {
      destination: 'app.log', // archivo de log
      translateTime: 'dd-mm-yyyy HH:MM:ss Z', // formato de la fecha y hora
      levelFirst: true,
    },
  },
};

const config = isProduction ? productionConfig : developmentConfig;
const logger = pino(config);

logger.info('Logger initialized');

let k = 0;
function operation() {
  setInterval(() => {
    logger.debug({ message: 'Operation running', contador: k++ });
  }, 1000);
  //   throw new Error('Operation failed');
}

operation();

process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection:', reason);
  process.exit(1);
});

const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGBREAK'];

signals.forEach((signal) => {
  process.on(signal, () => {
    logger.info(`${signal} received`);
    process.exit(0);
  });
});

/**
 * Pino es un logger muy popular en Node.js.
 * node index.js
 * node index.js --log-level=debug
 * node index.js --log-level=info
 * node index.js --log-level=warn
 * node index.js --log-level=error
 * node index.js --log-level=fatal
 * node index.js --log-level=trace
 * node index.js --log-level=silent
 * node index.js --log-level=debug
 * node index.js --log-level=info
 * node index.js --log-level=warn
 *
 * NODE_ENV=production node index.js
 * No muestra nada en la consola
 *
 */
