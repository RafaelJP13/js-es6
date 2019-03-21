class Animal {
    constructor(type, legs){
        this.type = type
        this.legs = legs
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound)
    }

    metaData(){
        return `${this.type} ${this.legs}`
    }

    static return10(){
        return 10
    }

    
}

module.exports = Animal