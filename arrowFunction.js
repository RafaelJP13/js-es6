function add(...nums){

    let total = nums.reduce((x,y)=> x + y) 
    console.log(total)

}

add(4,5,7,8,12)

// ------------------------------------------------- //

function add2(...nums){

    let total = nums.reduce((x,y)=> x + y) 
    console.log(total)
}

add2(4,5,7,8,12)