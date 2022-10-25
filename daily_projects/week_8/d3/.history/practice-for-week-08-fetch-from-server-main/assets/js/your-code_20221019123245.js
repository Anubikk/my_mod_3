export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {
      return fetch("/dogs",{
        method: "POST",
      })
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
