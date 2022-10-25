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
// From the server documentation, take note of what the response components of a request to POST /products should be.
// Now, make the same fetch request to POST /products and print to the console the following components of the response:
// status code
// Content-Type header
// The URL of the response
// If you need help finding these components on the response, take a look at the MDN Documentation on a Response object returned from a fetch request.

// Do the components printed in the console match the documentation?

// Take a moment to think about why the fetch request is behaving this way and what you think could possibly be happening when the fetch request is made and the response from the server is received. Ask a question if you are stuck before continuing.
// If you are not convinced the server documentation is correct, make the equivalent POST /products request in Postman to confirm that the components of the response given by Postman is the same as the documentation.

// Spoilers: the fetch request is following the redirection indicated by the status code and the Location header in the original response to the POST /products request. The URL of the response given in the fetch request is not the same URL of the request, which probably means a redirection occured.

// Examine the .redirected property on the Response object of the fetch request by printing it to the console. If this property is true, the fetch request followed the redirection that the server responded with.

// See if you can get the URL which you got redirected to. Check the MDN Documentation on a Response object to see what property you could use to print the URL of the redirection. Hint: Take a look at the .url property.

// Discuss if your hypothesis of what happens to the response of a fetch request when redirected aligns with the printed results.
// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
