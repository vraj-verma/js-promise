const p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('Resolved p1');
          } else {
               reject('Rejected P1')
          }
     }, 1000);
});

const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('Resolved p2');
          } else {
               reject('Rejected P2')
          }
     }, 2000);
});

const p3 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('Resolved p3');
          } else {
               reject('Rejected P3')
          }
     }, 4000);
});

Promise.all([p1, p2, p3])
     .then(d => d.forEach(x => {
          console.log(x)
     }))
     .catch(e => console.log(e));

// OUTPUT = ['Resolved p1', 'Resolved p2', 'Resolved p3']

// Promise.all returns data in array if all the promises gets RESOLVED,
// throw an error if any of them gets REJECTED won;t look for other promises results.
// ALL OR NOTHING.
