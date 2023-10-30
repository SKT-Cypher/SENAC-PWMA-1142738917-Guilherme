// Simulação de dados para a Champions League
let clubes = [
    { nome: 'Real Madrid', pais: 'Espanha', titulos: 13 },
    { nome: 'AC Milan', pais: 'Itália', titulos: 7 },
    { nome: 'Liverpool', pais: 'Inglaterra', titulos: 6 }
];

// Tratamento de Array - Iteração forEach
let clubesContainer = document.getElementById('clubes');
clubes.forEach(clube => {
    let clubeElement = document.createElement('div');
    clubeElement.innerHTML = `<p>Clube: ${clube.nome}</p><p>País: ${clube.pais}</p><p>Títulos: ${clube.titulos}</p><hr>`;
    clubesContainer.appendChild(clubeElement);
});

// Tratamento de Eventos de Botão
document.getElementById('simularGravacao').addEventListener('click', function() {
    // Simulação de gravação em "banco de dados" - Estrutura de Dados (Objeto)
    let dadosChampionsLeague = {
        temporadaAtual: '2023-2024',
        participantes: clubes.length,
        // Outros dados relevantes sobre a Champions League
    };

    // Simulação de gravação
    console.log('Gravando no banco de dados:', dadosChampionsLeague);
    alert('Dados da Champions League foram gravados!');
});
