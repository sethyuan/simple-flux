# Simple Flux

A simple flux implementation inpired by RiotControl.

## Installation

```bash
npm install --save simple-flux
```

## Quick Example

```js
// mystore.js
import {Store, addStore} from "simple-flux";

const myStore = new Store();

myStore.on("my-action-1", ({param1, param2} => {
  console.log("my action 1");
}));

myStore.on("my-action-2", ({param1} => {
  console.log("my action 2");
}));

addStore(myStore);
```
