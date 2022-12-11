import { ref } from 'vue';
import { socketKey } from './composables.js';
/**
 * Function to register the plugin in the application.
 * @param {Vue} app - The Vue instance.
 * @param {SocketIO} socket - The SocketIO instance.
 * @param {Object} options - Plugin configuration options.
 */
function install(app, socket, options) {
  const connected = ref(false);
  const $socket = {};

  socket.on('connect', () => {
    connected.value = true;
    console.log('VueConnexion: Connected to the server.');
  });

  socket.on('disconnect', () => {
    connected.value = false;
  });

  Object.defineProperties($socket, {
    connected: {
      get() {
        return connected.value;
      },
      enumerable: false,
    },
    disconnected: {
      get() {
        return !connected.value;
      },
      enumerable: false,
    },
  });

  app.config.globalProperties.$socket = $socket;
  // app.mixin()

  app.provide(socketKey, $socket);
}

export default install;
