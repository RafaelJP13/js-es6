function add(...nums){

     // console.log(arguments)
     console.log(nums)
}

add(4,5,7,8,12)

function count(nums){
    return nums
}

const numeros = [4,5,7,8,12]

const [a,b, , ,e] = count(numeros)

console.log(`${a} ${b} ${e}`)

// ------------------------------------------------- //


function somar(numeros){
    var soma = 0
    for (const numero of numeros) {
        soma = soma + numero
    }

    return soma
}

console.log(`${somar([1,1,1,1,1])}`)