"use strict";

var EventEmitter = require("events");

var stores = [];

function addStore(store) {
  stores.push(store);
}

function Store() {
  this._emitter = new EventEmitter();
}
Store.prototype.on = function on() {
  this._emitter.on.apply(this._emitter, arguments);
};
Store.prototype.once = function once() {
  this._emitter.once.apply(this._emitter, arguments);
};
Store.prototype.off = function off() {
  this._emitter.removeListener.apply(this._emitter, arguments);
};
Store.prototype.dispatch = function dispatch() {
  this._emitter.emit.apply(this._emitter, arguments);
};

var flux = {
  Store: Store,
  addStore: addStore,
};

["on", "once", "off", "dispatch"].forEach(function(api) {
  flux[api] = function() {
    var args = arguments;
    stores.forEach(function(store) {
      store[api].apply(store, args);
    });
  };
});

module.exports = flux;
