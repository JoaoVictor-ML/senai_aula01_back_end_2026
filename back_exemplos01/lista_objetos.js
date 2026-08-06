// Definição de variaveis tipo lista de objetos
const frutas = [
    { nome: "Maçã", preco: 2.5, tipo: "Maçã Fuji", cor: "Vermelha"},
    { nome: "Banana", preco: 3.0, tipo: "Banana Prata", cor: "Amarelo"},
    { nome: "Laranja", preco: 1.5, tipo: "Laranja Pera", cor: "Laranja"},
    { nome: "Uva", preco: 4.0, tipo: "Uva Itália", cor: "Roxa"},
    { nome: "Abacaxi", preco: 5.0, tipo: "Pérola", cor: "Amarela"}
]
//Exibindo informações do objeto
frutas.forEach(fruta => {
    console.log(`Nome: ${fruta.nome}, Preço: R$ ${fruta.preco.toFixed(2)}, Tipo: ${fruta.tipo}, Cor: ${fruta.cor}`)
})
