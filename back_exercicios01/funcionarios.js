const funcionarios = [
    { nome: "João Victor Moraes Lopes", cargo: "CEO", salario: "150000000", tempo: "1500" },
    { nome: "Leonardo Canina Marchiori", cargo: "Dev júnior", salario: "1600", tempo: "5000" },
    { nome: "Lívia Fernandes de Morais", cargo: "Faxineira", salario: "800", tempo: "100" },
    { nome: "Jéssica Guedes Vaz", cargo: "Pet", salario: "100", tempo: "1000" },
    { nome: "Eloísa Macedo da Silva", cargo: "Faxineira", salario: "800", tempo: "100" },
]
funcionarios.forEach(funcionario => {
    console.log(`nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario: ${funcionario.salario}, Tempo em horas: ${funcionario.tempo}`)
})
