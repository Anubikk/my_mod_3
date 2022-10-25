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


  const getProducts = async () => {
    const response = await fetch("/products"); //fetch returns a promise
    console.log(response.status); // 200
    console.log("is response ok?", response.ok); // true

    if(response.ok) { // if response is ok
        const productPage = await response.text(); // get the text of the response
        console.log("product page", productPage);
    } else { // if response is not ok
        console.log("error", response.status); // log the error
    }
};



/* ============================== Phase 3 ============================== */

// Your code here

