console.log("Hello Typescript");



function add(a: number, b: number): number{
    return a + b;
}


let sum = add(1, 2);



// boolean

let muted: boolean = true;


// numeros

let numerador: number = 42;
let denominador: number = 4;

let resultado = numerador / denominador;
console.log(resultado);


let namePerson: string = "Alejandro";

let saludo = `Hola ${namePerson}`;

// arreglos 

let people: string[] = [];
people = ["Alejandro", "Nicole", "Isabel"];
// people.push(1100); ERROR

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(1000);


enum Color {
    rojo = "rojo",
    verde = "verde",
    azul = "azul"
}

let colorFav:Color = Color.rojo;
console.log(`Mi color favorito es ${colorFav}`);

// any


let comodin: any = "Joker";
comodin = {type: "wildcard"};


let someObject: object = {
    doc : "Documentacion",
}



function createAdder(a: number): (number) => number {
    return function(b: number){
        return a + b;
    };
}


const addFour = createAdder(4);
const result = addFour(10);


function fullName(firstname: string, lastName: string = "Random"): string{
    return `${firstname} ${lastName}`;
}


const richard = fullName("richard");
console.log(richard);
