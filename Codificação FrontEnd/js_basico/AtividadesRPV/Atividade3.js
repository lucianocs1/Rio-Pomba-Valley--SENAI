  //Exercício 1

  /*
  const readline = require('readline');

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  let livro = {
      idDoLivro: 1,
      materiaDoLivro: 'Ciências',   
      turma: ['1º ano - ensino médio', '2º ano ensino - médio', '3º ano - ensino médio', '6º ano - ensino fundamental'],
      disponivel: true}
  
  let aluno = {
      matricula: 4557,
      nomeAluno: 'Luciano',
      serie: '2º ano - ensino médio',
      turmaAno: '002-001-2019',
      valorCurso: null,
      infoescolar: 'Manhã',
      livrosEmprestados: []}
    
    rl.question("Digite a matricula do aluno: ", function(num1) {
      rl.question("Digite a ID do livro: ", function(num2) {   
          var idAluno = parseInt(num1);
          var idLivro = parseInt(num2);
          if(aluno.matricula == idAluno){
              if(livro.idDoLivro == idLivro){
                  aluno.livrosEmprestados = livro;
                  console.log(`O livro ${livro.materiaDoLivro} foi emprestado para o aluno ${aluno.nomeAluno} matricula: ${aluno.matricula} da turma: ${aluno.turmaAno} Série: ${aluno.serie}.`)
              }else{
                  console.log("Livro não localizado.")
              }
          }else{
              console.log("Aluno não cadastrado.")
          }
      rl.close();    
      })})
      
  */

   //Exercício 2
          
          let professor = {
              codProf: 1,
              nomeProfessor: 'Gabriel',
              cargaHoraria: 1200,
              turno: 'Noite',
              materiaMinistrada:['Português']
          }
  
          let turmas = {
              codTurma: 1,
              serieTurma: '2º ano - ensino médio',
  
          }
          
          let aluno = {
              matricula: 1,
              nomeAluno: 'Luciano',
              serieTurma: turmas.serieTurmao,
              turmaAno: '2017',
              valorCurso: null,
              turno: 'Noite',
              livrosEmprestados: []
          }
          
          let aulas = {
              IdAula: 1,
              nomeProfessor: professor.nomeProfessor,
              serieTurma: turmas.serieTurma,
              diaAula: []
          }
  
  
          let escolaStark = {
              alunos: [aluno],
              ministracaoAulas: [aulas],
              realizacaoSerie:[turmas],
              professores:[professor]
          }