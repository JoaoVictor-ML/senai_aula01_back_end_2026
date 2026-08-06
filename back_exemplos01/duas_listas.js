// Atribuição de variaveis
var frutas = ["maçã", "Banana", "Laranja", "Uva", "Abacaxi"]
var precos = [2.5, 3.0, 1.5, 4.0, 5.0]
// Acessando Elementos do vetor
console.log("O primeiro elemento do vetor é: " + frutas[0])
console.log("O segundo elemento do vetor é: " + frutas[1])
// Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`O Produto ${i} é ${frutas[i]}\t R$ ${precos[i].toFixed(2)}`)
}
// Acessando com foreach (para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta} \t R$ ${precos[indice].toFixed(2)}`)
})
