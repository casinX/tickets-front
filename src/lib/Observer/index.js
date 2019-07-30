let id = 0;


class Observer {
  constructor(){
    this.callbacks = {};
  }

  subscribe = (callback) => {
    callback.subscribeId = id++;
    this.callbacks[callback.subscribeId] = callback;
  };

  unSubscribe = (callback) => {
    delete this.callbacks[callback.subscribeId];
  };

  notifyAll = (value) => {
    Object.values(this.callbacks).forEach(callback => {
      callback(value);
    });
  };
}


export default Observer;