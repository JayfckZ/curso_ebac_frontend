const nomes = ["João", "Victor", "Marcelo", "Ana", "Caio", "Maria", "Beatriz"]

// CRIA UM OBJETO E GERA UMA NOTA ALETÓRIA AOS ALUNOS
const alunos = nomes.map((itemAtual) => {
    return {
        nome: itemAtual,
        nota: Math.floor(Math.random() * 11)
    }
})

console.log('\ALUNOS\n')
console.log(alunos)

encontraAluno = () => {
    let alunosNotaAlta = []

    alunos.forEach((itemAtual) => {       
    if (itemAtual.nota >= 6){
            alunosNotaAlta.push(itemAtual)
        }
    })
    
    console.log('\nALUNOS COM NOTA ALTA\n')
    if(alunosNotaAlta.length == 0){
        console.log('Não houve alunos com nota maior ou igual a 6.\n')
    } else {
        console.log(alunosNotaAlta)
    }
}

encontraAluno()