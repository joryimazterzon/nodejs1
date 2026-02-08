/**
 * Los Diagnostic Channels facilitan la creación de canales específicos dentro del entorno Node.js,
 * optimizados para no impactar significativamente el ciclo de eventos (event loop).
 * Mediante un sencillo flujo de trabajo, puedes:
 *
 *
 * Crear un canal dedicado para tu aplicación.
 * Suscribirte en puntos estratégicos del código donde deseas recolectar eventos.
 * Publicar eventos importantes que son posteriormente escuchados o enviados a un sistema de monitoreo.
 */

const diagnostics = require('node:diagnostics_channel');

const channel = diagnostics.channel('mi-app');

function onMessage(message) {
  console.log('Mensaje recibido:', message);
}

diagnostics.subscribe('mi-app', onMessage);

if (diagnostics.hasSubscribers('mi-app')) {
  channel.publish('mi-app', 'Hola, este es un mensaje');
}

// importante: desconectar el suscriptor cuando se termine de usar el canal
diagnostics.unsubscribe('mi-app', onMessage);
