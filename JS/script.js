const firstName = prompt ('Qual è il tuo nome?');
const lastName = prompt ('Qual è il tuo cognome?');
const color = prompt ('Qual è il tuo colore preferito?');

//console.log('pippo1');

document.getElementById ('my-first-JS').innerHTML = `${firstName} ${lastName} ${color} 101`;


//firstName + ' ' + lastName + ' ' + color + '101';