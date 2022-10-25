export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {

    return fetch("/dogs",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: "Fido",
            age: 3
        })
    })
}



export function postNewDogV2(name, age) {
    return fetch("/dogs",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: name,
            age: age
        })
    })
}

export function deleteDog(id) {
    // ✓ should return a fetch call (1 ms)
    //   ✕ should set the appropriate method (3 ms)
    //   ✕ should set the appropriate headers (1 ms)
    //   ✕ should be sent to the correct endpoint (1 ms)
    return fetch(`/dogs/${id}`, {
        method: "DELETE",
}
