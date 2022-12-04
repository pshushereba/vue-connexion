import { inject } from 'vue';

const socketKey = Symbol('$socket');

const useSocket = () => inject(socketKey);

export { socketKey, useSocket };
