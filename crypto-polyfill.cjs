// Simple polyfill for crypto.getRandomValues
if (!globalThis.crypto) {
  globalThis.crypto = {};
}

if (!globalThis.crypto.getRandomValues) {
  globalThis.crypto.getRandomValues = function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  };
} 