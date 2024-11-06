// Main thread
worker.postMessage('Hello from main thread!');

// Worker thread (in worker.js)
self.addEventListener('message', (event) => {
  console.log('Received from main thread:', event.data);
  self.postMessage('Hello back from worker!');
});
