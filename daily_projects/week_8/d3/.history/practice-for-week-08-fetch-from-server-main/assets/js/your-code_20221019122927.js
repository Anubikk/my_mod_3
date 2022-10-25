export function getAllDogs() {
    // ✕ should return a fetch call (39 ms)
    // ✕ should make a fetch request to the correct endpoint (1 ms)
    // ✕ should not have any options passed to fetch (1 ms)
    // Return a fetch call to GET /dogs. Implemented correctly, clicking this button in your browser at localhost:5001 should redirect you to the page with all of the dogs.

    if(!fetch) {
        throw new Error("fetch is not defined")
    } else {
        return fetch("/api/dogs")
    }
}

export function getDogNumberTwo() {
    // Your code here
}

export function postNewDog() {
    // Your code here
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
