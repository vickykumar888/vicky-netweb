class Birds {
   constructor(name, sound, fly){
    this.name = name;
    this.sound = sound;
    this.fly = fly;
   }
   canfly(){
    return (`the ${this.name} says ${this.sound } & can fly :${this.fly}`)
   }

}

let crow = new Birds ("Crow ", "cro-cro-cro" , true);

//console.log(crow);
//console.log(crow.canfly());

let penguin = new Birds ("penguin", "chi-chi-chi", false)

//console.log(penguin.canfly())

class Birds2 extends Birds {
    //  constructor(name,sound, fly){
    //     super(name,sound,fly)
        
    // }
    fly =  true;
}
let spraow = new Birds2("spraow", "ci-ci-ci",false )
console.log(spraow.canfly())// here we put false in the arguments but thereafter receives the true because we provide it the true 
