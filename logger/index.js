function operation() {
  setInterval(() => {
    console.log('Operation running');
  }, 1000);
  //   throw new Error('Operation failed');
}

operation();

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  process.exit(1);
});

const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGBREAK'];

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`${signal} received`);
    process.exit(0);
  });
});
