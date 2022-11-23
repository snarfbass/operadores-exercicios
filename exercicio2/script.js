/*Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

const numero1 = prompt("digite um numero")
const numero2 = prompt("digite um numero")
console.log(numero1>numero2)
console.log(numero1==numero2)
console.log(numero1%numero2)
console.log(numero2%numero1)


