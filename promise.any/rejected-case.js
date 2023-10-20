const p1 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (false) {
               resolve('Resolved p1');
          } else {
               reject('Rejected p1')
          }
     }, 4000);

});


const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (false) {
               resolve('Resolved p2');
          } else {
               reject('Rejected p2')
          }
     }, 2000);
});

const p3 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (false) {
               resolve('Resolved p3');
          } else {
               reject('Rejected p3')
          }
     }, 3000);
});

Promise.any([p2, p1, p3])
     .then(d => console.log(d))
     .catch(err => console.log(err));

// OUTPUT = [AggregateError: All promises were rejected] {
//   [errors]: [ 'Rejected p2', 'Rejected p1', 'Rejected p3' ]
// }

// Promise.any return a string value of one of the promise which 
// RESOLVED first and won't wait for other promises, as the name suggest 
// ANY, promise returned as soon as it RESOLVED
// RETURNS AggregateError(MEANING MESSAGE) if all the promises gets REJECTED
