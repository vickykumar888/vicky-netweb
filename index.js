class student {
  constructor(name, age) {
    this.name = name,
      this.age = age

  }
  display() {
    console.log(`${this.name} ${this.age}`)
  }
}
let newOne = new student("sam", 22);
console.log(newOne)
newOne.display()

let rohan = new student("herry", 34)
console.log(rohan)
rohan.display()

class student2 extends student {
  numberOfStudent = 20

}


let newData = new student2("rishi", 21)
console.log(newData)
newData.numberOfStudent

class cars {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  car() {
    console.log(`${this.name}${this.year}`)
  }
}
let newOneCar = new cars("audi", 2015)
console.log(newOneCar)
newOneCar.car()
class car2 extends cars {
  oneCarMore = "BMW"
}
let newCar = new car2("alto", 2016)
console.log(newCar)
newCar.oneCarMore
