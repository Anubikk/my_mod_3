// return a promise
// fulfill the promise after 1 second
// print "done stretching" once the promise is fulfilled


function stretch() {
 return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("done stretching");
        resolve();
      }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
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
  stretch().then(runOnTreadmill).then(liftWeights).then(() => {
    setTimeout(() => {
      console.log("done working out");
    },3000);
  });
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
