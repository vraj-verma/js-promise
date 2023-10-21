# JavaScript Promise Methods

In JavaScript, promises are a powerful tool for handling asynchronous operations. There are several methods available to work with multiple promises effectively. This document provides an overview of four important promise methods:

## Promise.all

- **Description**: `Promise.all` is a method that takes an array of promises and returns a new promise. This promise resolves when all the promises in the given array have resolved successfully. If any of the promises in the array is rejected, the `Promise.all` will be rejected.

- **Use Case**: It is commonly used when you need to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.

## Promise.allSettled

- **Description**: `Promise.allSettled` is similar to `Promise.all` but with a difference. It takes an array of promises and returns a promise that resolves when all the promises in the array have settled, either resolved or rejected. It does not short-circuit on the first rejection.

- **Use Case**: This method is useful when you want to know the outcome of all promises in an array, regardless of whether they were fulfilled or rejected.

## Promise.race

- **Description**: `Promise.race` takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise in the array settles, whether it's resolved or rejected.

- **Use Case**: It's used when you want to respond to the first result (either success or failure) among a set of asynchronous tasks.

## Promise.any

- **Description**: `Promise.any` is similar to `Promise.race`, but it has a different behavior. It resolves when the first promise in the array resolves, and it only rejects if all the promises in the array are rejected.

- **Use Case**: It's useful when you want to handle the first successful result among a set of promises and ignore the rejections until all options are exhausted.

These four promise methods are essential in managing asynchronous operations in JavaScript, offering flexibility and control over how you handle multiple promises in your code.
