

// IIFE
// Inmidetly Invoque Function Expresion 

// el block se limita a solo la funcion.
// Este se llama closure.
(function(){
  let color = 'green';
  function printColor(){
    console.log(color);
  }

  printColor();
})()



function makeColorPrinter(color){
  let colorMessage = `The color is ${color}`;
  return function(){
    console.log(colorMessage);
  }
}

let greenColorPrinter = makeColorPrinter("Green");
greenColorPrinter()


// variables que tienen scope global 
const counter = {
  count: 3,
};


function makeCounter(n){
  let count = n;

  return {
    increase: function(){count++;},
    decrease: function(){count--;},
    getCount: function(){return count;}

  };
}

let counterPrivate = makeCounter(7);

console.log(counterPrivate.getCount());
counterPrivate.increase();
console.log(counterPrivate.getCount());
counterPrivate.increase();
counterPrivate.increase();
counterPrivate.increase();
for(let i = 0; i < 1000; i++){
  counterPrivate.decrease();
}
console.log(counterPrivate.getCount());



// 
console.log(counter.count);
