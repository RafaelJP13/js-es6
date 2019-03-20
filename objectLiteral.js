function addressMaker(city, state){

    const newAddress = {
        newCity:city,
        newState:state
    }

    console.log(newAddress)

}

addressMaker('São Vicente', 'São Paulo')

// ------------------------------------------------- //

function addressMaker2(address){

    const {city, state} = address

    const newAddress = {
        city,
        state,
        country:'United States'
    }

    console.log(newAddress)
}

addressMaker2({city:'São Vicente', state:'São Paulo'})