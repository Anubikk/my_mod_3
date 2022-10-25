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

const response = await fetch("/products");//fetch returns a promise
console.log(response.status); // 200
console.log(response.ok); // true
console.log(response.headers.get("content-type")); // "json/application"
console.log(response.text()); // "promise pending" //const data = await response.text(); // "promise resolved" //console.log(data); // "json data"





/* ====== 2. Print true if the status of the response was successful ====== */

 console.log(response.ok); // true



/* =================== 3. Print the Content-Type Header =================== */

console.log(response.headers.get("content-type")); // "json/application"


/* ============== 4. Print the body of the response as text =============== */

console.log(response.text()); // "promise pending" //const data = await response.text(); // "promise resolved" //console.log(data); // "json data"
