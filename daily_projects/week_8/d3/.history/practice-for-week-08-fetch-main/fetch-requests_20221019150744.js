/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/
//things to fetch
//status code
  //.ok
  // .headers.get('content-type')
  //.text()
/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch("/products");




//broswer console

const response = await fetch("/products");
console.log(response.status); // 200
console.log(response.ok); // true
console.log(response.headers.get("content-type")); // "t"
console.log(response.text());





/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here



/* =================== 3. Print the Content-Type Header =================== */

// Your code here



/* ============== 4. Print the body of the response as text =============== */

// Your code here
