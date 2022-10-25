/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => console.log(data));

  // Response components:
  // status: 200
  // statusText: OK
  // headers: Headers {}
  // ok: true
  // type: basic
  // url: "http://localhost:3000/posts"
  



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
