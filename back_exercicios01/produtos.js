const produtos = [
    { nome: "Arroz", preco: 22.7, quant: 80 },
    { nome: "Feijão", preco: 12.6, quant: 75 },
    { nome: "Macarrão", preco: 4.3, quant: 20 },
    { nome: "Biscoito", preco: 3.5, quant: 12 },
    { nome: "Batata", preco: 8.5, quant: 50 },
    { nome: "Alho", preco: 12.3, quant: 35 },
    { nome: "Oleo", preco: 5.9, quant: 46 }
]
produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quant}`)
    console.log(`O valor total de ${produto.nome} no estoque é de R$${(produto.preco * produto.quant).toFixed(2)}\n`)
})
