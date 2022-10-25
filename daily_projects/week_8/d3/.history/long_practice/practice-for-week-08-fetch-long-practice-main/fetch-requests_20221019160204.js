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


return fetch("/products" , {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
   if(response.ok) { // if response is ok
    const productPage = await response.text(); // get the text of the response
    console.log(response.status); // 200
    console.log(response.headers.get("content-type")); // "json/application"
    

});



/* ============================== Phase 3 ============================== */

// Your code here
