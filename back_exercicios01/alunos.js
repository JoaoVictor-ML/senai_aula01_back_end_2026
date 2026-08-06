const alunos = [
    { nome: "João", idade: 17, cidade: "Amparo", nota: 10.0 },
    { nome: "Leonardo", idade: 16, cidade: "Arcadas", nota: 8.5 },
    { nome: "Lívia", idade: 21, cidade: "Pedreira", nota: 3.2 },
    { nome: "Jéssica", idade: 37, cidade: "Jaguariúna", nota: 6.0 },
    { nome: "Eloísa", idade: 23, cidade: "Santo Antônio da Posse", nota: 0.5 }
]
alunos.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Cidade: ${aluno.cidade}, Nota: ${aluno.nota}`)
    if (aluno.nota >= 7)
        console.log(`${aluno.nome} foi Aprovado`)
    if (aluno.nota < 7 && aluno.nota >= 5)
        console.log(`${aluno.nome} está de Recuperação`)
    if (aluno.nota < 5)
        console.log(`${aluno.nome} foi Reprovado(a)`)
})
