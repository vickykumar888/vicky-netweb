// class
//  classes are blueprint or template of the object;
// it increases code reusability;
class printDetails {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
       Details(){
        console.log(this.name + this.age)
    }
  }
  let result = new printDetails("pooja", 23);
  console.log(result);
  result.Details();


  class logNewDetails extends printDetails {
    city = "amritsar"
  }

  let data = new logNewDetails("priya", 26)
  console.log(data);

  
  // inheritance using extends keyword;
  class bioDataFamily {
    fatherMoney() {
      console.log("fathers money")
    }
  }

  class son extends bioDataFamily {
    sonsMoney() {
      console.log("sons money");
    }
  }

  class grandson extends son {
    grandchildMoney() {
      console.log("grandChlid money");
    }
  }
  let output = new grandson();
  output.sonsMoney();
  output.grandchildMoney();
  output.fatherMoney();

  

 