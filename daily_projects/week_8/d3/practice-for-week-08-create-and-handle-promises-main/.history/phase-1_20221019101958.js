// return a promise
// fulfill the promise after 1 second
// print "done stretching" once the promise is fulfilled


function stretch() {
 const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     console.log("done stretching");
     resolve();
   }, 1000);
 });
  return promise;
}

function runOnTreadmill() {
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log("done running on treadmill");
       resolve();
     }, 500);
   });
}

function liftWeights() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 1000);
  });
}

function workout() {
  // Your code here
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
