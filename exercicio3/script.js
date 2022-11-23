//Parte 1
 // a) 5 é maior que 20 e também é menor que 2;
 console.log("a) 5 é maior que 20 e também é menor que 2?", (5 > 20) && (5 < 2))

 // b) 5 é igual a 5 ou é igual a “5”;
 console.log(`b) 5 é igual a 5 ou é igual a “5”?`, (5 == 5) && (5 == "5"))
 console.log(`b) 5 é igual a 5 ou é igual a “5”?`, 5 === 5 && 5 === "5")

 // c) negação de (vinte é maior que cinquenta)
 console.log("c) negação de (vinte é maior que cinquenta)", !(20 > 50))
 console.log("c) negação de (vinte é maior que cinquenta)", !("vinte" > "cinquenta"))

 // d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
 console.log("d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", !((20 > 50) || (50 > 60)))
 console.log("d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", !(("vinte" > "cinquenta")||  ("cinquenta" > "sesenta")))


 //Parte 2
const numeroFilhos = 2 
const salario = 2000
const comissao = 0.10
const auxilioCreche = 45.50
const descontoInss = 0.05

const janeiro = 5784.50
const fevereiro = 3418.41
const marco = 4124.10
const abril = 1874
const maio = 7000
const junho = 9450

// O salário fixo mais o auxílio creche
console.log("O salário fixo mais o auxílio creche:", salario + (auxilioCreche * numeroFilhos))
// Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log("Quanto Fulano de Silva receberá de comissão em janeiro:", janeiro * comissao)
// Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS:", (salario + (janeiro * comissao)) * descontoInss)
// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log("Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.", 
`
    Janeiro: ${salario + (janeiro * comissao) - ((salario + (janeiro * comissao)) * descontoInss)}
    Fevereiro: ${salario + (fevereiro * comissao) - ((salario + (fevereiro * comissao)) * descontoInss)}
    Março: ${salario + (marco * comissao) - ((salario + (marco * comissao)) * descontoInss)}
    Abril: ${salario + (abril * comissao) - ((salario + (abril * comissao)) * descontoInss)}
    Maio: ${salario + (maio * comissao) - ((salario + (maio * comissao)) * descontoInss)}
    Junho: ${salario + (junho * comissao) - ((salario + (junho * comissao)) * descontoInss)}
`
)
// A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
console.log("A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.",
(
(salario + (janeiro * comissao) + (auxilioCreche * numeroFilhos)) + 
(salario + (fevereiro * comissao) + auxilioCreche * numeroFilhos) +
(salario + (marco * comissao) + auxilioCreche * numeroFilhos) +
(salario + (abril * comissao) + auxilioCreche * numeroFilhos) +
(salario + (maio * comissao) + auxilioCreche * numeroFilhos) +
(salario + (junho * comissao) + auxilioCreche * numeroFilhos)) 
/ 6)