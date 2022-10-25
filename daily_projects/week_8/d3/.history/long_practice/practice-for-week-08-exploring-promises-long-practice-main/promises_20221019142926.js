/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
  return 1;
}
async function num2() {
    return 2;
}

console.log("num1", num1());
console.log("num2", num2());
num2().then((res) => console.log(res));



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
  const num = await num2();
  console.log("waiting", num);
}


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am done!");
    }, 1000);
  });
  const result = await myPromise;
  console.log("My promise is", result);
}



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
new Promise((resolve) => {
    setTimeout(() => {
        resolve("I am done!");
    }, 1500);
}).then((res) => {
    console.log("My promise is", res);
});




/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => {
    Promise



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
