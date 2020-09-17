



function hello(){
  console.log(`Hola soy ${this.name} ${this.lastName}`);
}



const richard = {
  name: "Richard",
  lastName: "Kaufman"
};




hello.call(richard);


function walk(meters, direction){
  console.log(`${this.name} walks ${meters} into ${direction}`);
}


// recibe pramatros por la coma
walk.call(richard, 400, "norte");


// apply recibe los argumentos de forma de lista
const params = [800, "norest"]
walk.apply(richard, params)


// bind
const alejandro = {
  name: "Alejandro",
  lastName: "Andrade"
}


// bind
const alejandroSaysHello = hello.bind(alejandro)
alejandroSaysHello()

const alejandroWalks = walk.bind(alejandro)
alejandroWalks(1000, "east")


// forma de pasar argumentos primeramente
// en este caso estamos pasando los argumentos parcialemente esta tecnica se
// llama cutting
const alejandroWalks2 = walk.bind(alejandro, 1000);
alejandroWalks2("Nort")
