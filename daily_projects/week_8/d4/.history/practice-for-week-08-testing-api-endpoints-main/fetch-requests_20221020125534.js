/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/
fetch('/posts')
  .then(response => response.json())
  .then(data => console.log(data));

  // Response components:
  // status: 200
  // statusText: OK
  // headers: Headers {}
  // ok: true
  // type: basic
  // url: "http://localhost:5000/posts"
  // redirected: false
  // body: ReadableStream {}
  // bodyUsed: false

//alternate way to do it
 FUnction getPosts() {





/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

fetch('/posts', { //fetch takes two arguments, the first is the url, the second is an object with the method and body
  method: 'POST', //the method is POST
  headers: { //the headers are application/json
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ //the body is a stringified object
    message: 'Hello!' //the message is Hello!
  })
})
