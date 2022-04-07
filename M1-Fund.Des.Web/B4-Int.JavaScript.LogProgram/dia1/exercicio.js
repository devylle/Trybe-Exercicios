const myName = "Renata";
const birthCity = "Belo Horizonte"
let birtthYear = 1988; 
console.log (myName, birthCity, birtthYear);
birtthYear = 2030;
console.log (birtthYear);
birthCity = "Governador Valadares";
console.log (birthCity); // A mensagem de erro foi porque não se pode alterar o valor de uma constante. 
//E birthCity é uma constante.


let patientId = "50";
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log (typeof patientId)
console.log (typeof isEnrolled)
console.log (typeof patientInfo)
console.log (typeof patientEmail)
console.log (typeof patientAge)


let base = 5
let height = 8
const area = base * height
console.log (area)
const perimeter = base*2 + height*2
console.log (perimeter)


let nota = 59

if (nota >= 80) {
    console.log ("Parabéns, você foi aprovada(o)!")
}
else if (nota >= 60 ) {
    console.log ("Você está na nossa lista de espera")
}
else {
    console.log ("Você foi reprovada(o)")
}


const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);


const currentHour = 19
var message = " "

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir" 
} else if (currentHour >= 18) {
   message = "Rango da noite, vamos jantar :D" 
} else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?" 
} else if (currentHour >= 11) {
    message = "Hora do almoço!!!" 
} else {
    message = "Hmmm, cheiro de café recém passado"
}
console.log (message)


let weekDay = "sábado"

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira"|| weekDay == "quinta-feira"|| weekDay == "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D")
}else {
    console.log ("FINALMENTE, descanso merecido UwU")
}

let condictionTrybe = "feliz";

switch (condictionTrybe) {
    case "aprovada":
        console.log ("Parabéns, você foi aprovada(o)!")
        break
    case "lista":
        console.log ("Você está na nossa lista de espera")
        break
    case "reprovada":
        console.log ("Você foi reprovada(o)")
        break
    default:
        console.log ("Não se aplica")
        break
}