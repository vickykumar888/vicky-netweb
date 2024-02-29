class Aninmal {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
    display(){
     console.log(`${this.name} ${this.species}`)
    }
}


let husky = new Aninmal("leo", "Wolf");
console.log(husky, "husky")

class speciesData extends Aninmal {
    speed= "100"
}


let newData = new speciesData("browny", "dog");
console.log(newData, "new")
// console.log(newData.speed,"data");