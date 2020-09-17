// more eficient way




function Hero(name){
  // properties
  this.name = name; 
}


Hero.prototype.sayHello = function(){
  console.log(`Soy una super heroina ${this.name}`);
}


const zelda = new Hero("Zelda");
const link = new Hero("Link");


console.log(link.name);
console.log(link.sayHello);
console.log(link.toString);
console.log(link.hasOwnProperty('name'));
console.log(Object.getPrototypeOf(zelda));

zelda.sayHello();


// herencia prototipal
// const newObject = Object.create(object);





