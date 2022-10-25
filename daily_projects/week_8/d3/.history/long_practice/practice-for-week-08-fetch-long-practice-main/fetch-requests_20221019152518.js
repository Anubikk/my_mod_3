/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
const getProducts = async () => {
    const response = await fetch("/products"); //fetch returns a promise
    console.log(response.status); // 200
    console.log("is response ok?", response.ok); // true

    if(response.ok) { // if response is ok



/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
