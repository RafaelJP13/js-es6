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
