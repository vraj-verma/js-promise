const p1 = new Promise((resolve, reject) => {

     setTimeout(() => {
          if (true) {
               resolve('Resolved p1');
          } else {
               reject('Rejected p1')
          }
     }, 2000);

});


const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (false) {
               resolve('Resolved p2');
          } else {
               reject('Rejected p2')
          }
     }, 3000);
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

Promise.race([p2, p1, p3])
     .then(d => console.log(d))
     .catch(err => console.log(err));

// OUTPUT = Resolved p3

// Promise.race is just just a race, which ever promise takes lesser time to complete
// it will pick that promise and return the value in STRING, irrespective of result
// it does not take care about whether the promise is RESOLVED OR REJECTED it just pick
// based on lesser time, which ever promise RESOLVED OR REJECT first it will return.