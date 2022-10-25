export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {
    Let's hard code a new dog using fetch. If you have a dog of your own, this is your chance to add your pooch to the server! Return a fetch call to post a new dog with a name and age. Use the URLSearchParams API to make the body of your request. Take note: the server is expecting a name and age key from the request's body, and anything else will result in a server error.
    return fetch("/dogs",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
      })
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
