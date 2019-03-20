const personalInformation = {
    firstName: 'Rafael', 
    lastName: 'Fernandes',
    city:'São Vicente',
    state: 'São Paulo',
    zipcode: 11325030
}

const {firstName, lastName} = personalInformation

console.log(`${firstName} ${lastName}`)

// ------------------------------------------------- //

const personalInformation2 = {

    primeiroNome: 'Rafael',
    ultimoNome: 'Fernandes',
    cidade: 'São Vicente',
    estado: 'São Paulo',
    cep: 11325030

}

const {primeiroNome: pN, ultimoNome:uN} = personalInformation2

console.log(`${pN} ${uN}`)

// ------------------------------------------------- //


const [um, dois, ...resto] = [1,2,3,4,5,6]

console.log(`${um},${dois},${resto}`)

// ------------------------------------------------- //


const {name, age, ...rest} = {

    name: 'Fernando',
    age: 29,
    profissao: 'Dentista',
    sex: 'Masculino'
}


console.log(`${name}, ${age} ${rest}`)

// ------------------------------------------------- //

const numeral = [1,2,3,4]

let [num1, num2, , num4] = numeral

console.log(`${num1}, ${num2}, ${num4}`)



