const p1 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (true) {
               resolve('Resolved p1');
          } else {
               reject('Rejected p1')
          }
     }, 3000);

});


const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('Resolved p2');
          } else {
               reject('Rejected p2')
          }
     }, 2000);
});

const p3 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (true) {
               resolve('Resolved p3');
          } else {
               reject('Rejected p3')
          }
     }, 1000);
});

Promise.allSettled([p1, p2, p3])
     .then(d => {
          d.forEach(x => console.log(x));
     })
     .catch(err => console.log(err));

// Promise.allSettled does not throw an errow if any promise gets REJECTED like promise.all
// it do wait for other promises for their result(RESOLVED or REJECTED) and the return an array
// with RESOLVED AND REJECTED status & value