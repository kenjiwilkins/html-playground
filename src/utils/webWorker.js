/**
 * Web Worker utility for running tasks in background threads
 * This allows heavy computations without blocking the UI
 */

/**
 * Create a Web Worker from a function
 * @param {Function} workerFunction - The function to run in the worker
 * @returns {Worker} The created worker instance
 */
export function createWorker(workerFunction) {
  // Convert function to string and create a blob URL
  const workerCode = `
    self.onmessage = ${workerFunction.toString()}
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(blob);

  return new Worker(workerUrl);
}

/**
 * Run a task in a Web Worker
 * @param {Function} workerFunction - The function to run in the worker
 * @param {*} data - Data to send to the worker
 * @returns {Promise} Promise that resolves with the worker result
 */
export function runWorkerTask(workerFunction, data) {
  return new Promise((resolve, reject) => {
    const worker = createWorker(workerFunction);

    worker.onmessage = (e) => {
      resolve(e.data);
      worker.terminate();
    };

    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };

    worker.postMessage(data);
  });
}

/**
 * Check if Web Workers are supported
 * @returns {boolean} True if Web Workers are supported
 */
export function isWorkerSupported() {
  return typeof Worker !== 'undefined';
}

/**
 * Example worker functions that can be used across the app
 */

// Heavy computation example: Find prime numbers
export const primeWorkerFunction = function(e) {
  const limit = e.data;
  const primes = [];

  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }

  self.postMessage({
    count: primes.length,
    primes: primes.slice(-10),
    limit: limit
  });
};

// Data processing example: Sort large array
export const sortWorkerFunction = function(e) {
  const data = e.data;
  const sorted = data.sort((a, b) => a - b);
  self.postMessage(sorted);
};

// Analytics/tracking example: Process analytics data
export const analyticsWorkerFunction = function(e) {
  const events = e.data;

  // Process analytics data without blocking main thread
  const processed = events.map(event => ({
    ...event,
    timestamp: Date.now(),
    processed: true
  }));

  self.postMessage(processed);
};
