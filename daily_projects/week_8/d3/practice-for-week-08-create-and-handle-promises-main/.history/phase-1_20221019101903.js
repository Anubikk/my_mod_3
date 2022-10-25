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
   
}

function liftWeights() {
  // Your code here
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
