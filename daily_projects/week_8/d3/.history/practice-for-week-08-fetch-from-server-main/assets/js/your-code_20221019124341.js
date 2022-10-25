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
            "Content-Type": "x-www-form-urlencoded"
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
            "Content-Type": "x-www-form-urlencoded "
        },
        body: new URLSearchParams({
            name: name,
            age: age
        })
    })
}

export function deleteDog(id) {
    return fetch(`/dogs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type":  "x-www-form-urlencoded"
        }
    })
}
