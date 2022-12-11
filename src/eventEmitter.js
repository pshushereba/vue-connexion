class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  /**
   * Adds a listener to a specific socket event.
   * @param {String} event - The event name.
   * @param {Function} callback - The function to be run when the event is emitted.
   */
  addEventListener(event, callback) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(callback);
  }

  /**
   * Removes a callback from a specific event listener.
   * @param {String} event - The event name.
   * @param {Function} callback - The function to be removed.
   */
  removeEventListener(event, callback) {
    if (this._listeners.has(event)) {
      const listeners = this._listeners.get(event);
      listeners.delete(callback);
      if (listeners.size === 0) {
        this._listeners.delete(event);
      }
    }
  }

  emit(event, value) {
    if (this._listeners.has(event)) {
      for (const listener of this._listeners.get(event)) {
        listener(value);
      }
    }
  }
}

export default EventEmitter;
