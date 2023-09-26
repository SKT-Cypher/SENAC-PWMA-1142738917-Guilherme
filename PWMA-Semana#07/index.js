const database = [
    { id: 1, nome: 'Real Madrid', pais: 'Espanha', situacao: 'ativo' },
    { id: 2, nome: 'Manchester United', pais: 'Inglaterra', situacao: 'ativo' },
    { id: 3, nome: 'Bayern de Munique', pais: 'Alemanha', situacao: 'ativo' },
    { id: 4, nome: 'Juventus', pais: 'Itália', situacao: 'ativo' },
  ];

  function exibirTimes() {
    const listaTimes = document.getElementById('lista-times');
  
    // Limpar a lista antes de adicionarmos os times novamente
    listaTimes.innerHTML = '';
  
    // Iterar sobre o array de times e criar elementos <li> para cada time
    for (const time of database) {
      const itemLista = document.createElement('li');
      itemLista.textContent = `Nome: ${time.nome}, País: ${time.pais}, Situação: ${time.situacao}`;
      listaTimes.appendChild(itemLista);
    }
  }
  
  // Chamamos a função para exibir os times quando a página carregar
  window.addEventListener('load', exibirTimes);
  