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
    }, 2000);
  });
}

function workout() {
  // Write a function called workout that runs the above functions in a way that ensures you begin running on the treadmill after you've finished stretching. Begin lifting weights after running on the treadmill. Print "done working out" after you've finished lifting weights.

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
