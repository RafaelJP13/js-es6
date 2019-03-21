let example1 = [1,2,3,4,5,6]
let example2 = [...example1]

example2.push(true)

console.log(example2)

// ------------------------------------------------- //

let exemplo1 = {
    firstName: 'Rafael'

}

let exemplo2 = {
    ...exemplo1
}

console.log(exemplo2)