let historicoAluno = {
    ensinoMedio: true,
    ensinoSuperior: true,
    hardSkils: ['React', 'JavaScript', 'CSS3'],
    idioma: ['ingles', 'mandarin', 'espanhol']
}

let curso = {
    nomeCursoConcluido: 'TypeScript', 
    anoDeConclusao: '2017'}

let cursoProfissional = {
    nomeAluno: "Fernanda",
    nomeCurso: "Back-and",
    valorCurso: 100,
    infoCurso: ["matutido", "vespertino", "noturno", "integral"],
    cursoConclusao: [curso],
    historico: historicoAluno                 
}

console.log(cursoProfissional.cursoConclusao[0].nomeCursoConcluido);
console.log(cursoProfissional.cursoConclusao[0].anoDeConclusao);
console.log(cursoProfissional.historico.ensinoMedio);
console.log(cursoProfissional.historico.ensinoSuperior);
console.log(cursoProfissional.historico.hardSkils);
console.log(cursoProfissional.historico.idioma);