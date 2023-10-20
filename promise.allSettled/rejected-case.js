const p1 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (true) {
               resolve('Resolved p1');
          } else {
               reject('Rejected p1')
          }
     }, 1000);

});


const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('Resolved p2');
          } else {
               reject('Rejected p2')
          }
     }, 4000);
});

const p3 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (false) {
               resolve('Resolved p3');
          } else {
               reject('Rejected p3')
          }
     }, 2000);
});

Promise.allSettled([p2, p1, p3])
     .then(d => {
          d.forEach(x => console.log(x));
     })
     .catch(err => console.log(err));

// OUTPUT = [
// { status: 'fulfilled', value: 'Resolved p2' },
// { status: 'fulfilled', value: 'Resolved p1' }
// { status: 'rejected', reason: 'Rejected p3' }
// ]

// Promise.allSettled does not throw an errow if any promise gets REJECTED like promise.all
// it do wait for other promises for their result(RESOLVED or REJECTED) and then return an array
// with RESOLVED AND REJECTED status & value