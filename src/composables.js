import { inject } from 'vue';
import EventEmitter from './eventEmitter.js';

const emitter = new EventEmitter();
const socketKey = Symbol('$socket');

const useSocket = () => inject(socketKey);

const useRegisterSocketEvent = (event, callback) => {
  emitter.addEventListener(event, callback);
  console.log('VueConnexion: Registered event listener for', event);
  console.log(emitter._listeners);
};

export { socketKey, useSocket, useRegisterSocketEvent };
