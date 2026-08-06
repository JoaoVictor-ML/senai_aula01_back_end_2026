// Atribuição de variaveis
var frutas = ["maçã", "Banana", "Laranja", "Uva", "Abacaxi"]
// Acessando Elementos do vetor
console.log("O primeiro elemento do veotr é: " + frutas[0])
console.log("O segundo elemento do veotr é: " + frutas[1])
// Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`O elemento ${i} do vetor é ${frutas[i]}`)
}
// Acessando com foreach (para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`O elemento ${indice} do vetor é ${fruta}`)
})
