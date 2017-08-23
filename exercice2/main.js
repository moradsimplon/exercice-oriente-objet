function warriors(name,attack,defense,health)  {

  this.name=name;
  this.attack=attack;
  this.defense=defense ;
  this.health=health  ;

  this.combatWarriors = function(X){

    X.health-= this.attack;


  };
}

var guerrier1 = new warriors("morad",4,7,18);
var guerrier2 = new warriors("renaud",8 , 2 ,10);

guerrier1.combatWarriors(guerrier2);
console.log(guerrier2.health);

function magicians(name,attack,mana,health){
  this.name=name;
  this.attack=attack;
  this.mana=mana;
  this.health=health;

  this.care=function(){
    if (mana>10){
      this.mana-= 10;
      this.health+= 10;
    };
     this.combatWarriors = function(X){

    X.health-= this.attack;


  };
  }
}

var magicians1 = new magicians("mordor",3,15,20);
var magicians2 = new magicians("merlin",4,30,30);

magicians2.care(magicians1);
console.log("magicien2"+" "+"mana"+" "+magicians1.mana);
console.log("magicien2"+" "+"health"+" "+magicians1.health);
console.log("magicien1"+" "+"mana"+" "+ magicians2.mana);
console.log("magicien1"+" "+ "health"+" "+magicians2.health);

guerrier1.combatWarriors(magicians1);
console.log("magicien1"+" "+ "point de vie "+ " " +magicians1.health);
guerrier2.combatWarriors(magicians1);
console.log("magicien1"+" "+ "point de vie "+ " " +magicians1.health);
magicians1.care(magicians1);
console.log("magicien1"+" "+ "point de vie "+ " " +magicians1.health);
magicians1.combatWarriors(guerrier1);
console.log("guerrier1"+" "+ "point de vie "+ " " +guerrier1.health);
