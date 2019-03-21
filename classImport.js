const Animal = require('./classes')

let cat = new Animal('Cat',4)


cat.makeNoise('Meow')
console.log(cat)

console.log(Animal.return10())
console.log(cat.metaData())