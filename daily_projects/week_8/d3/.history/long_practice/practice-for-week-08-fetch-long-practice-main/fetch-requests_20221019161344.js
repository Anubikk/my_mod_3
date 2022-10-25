/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
return fetch("/products" , {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});




/* ============================== Phase 2 ============================== */
// Now, make the same fetch request to POST /products and print to the console the following components of the response:

// status code
// Content-Type header
// The URL of the response

return fetch("/products" , {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    if(response.redirected) {
        
}).then(response => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
    console.log(response.url);
});







/* ============================== Phase 3 ============================== */

// Your code here
