function alterarStatus(id) {
    let jogo = document.getElementById('game-' + id);                   // Seleciona o card do jogo pelo id
    let botao = jogo.querySelector('.dashboard__item__button');         // Seleciona o botão dentro do card
    let imagem = jogo.querySelector('.dashboard__item__img');           // Seleciona a imagem dentro do card

    if (imagem.classList.contains('dashboard__item__img--rented')) {    // Verifica se o jogo já está alugado
        if (confirm("Tem certeza que quer devolver este jogo?")) {      // Pergunta a confirmação para devolver
            imagem.classList.remove('dashboard__item__img--rented');    // Remove a classe de alugado da imagem
            imagem.classList.add('dashboard__item__img');               // Mantém a classe base da imagem

            botao.classList.remove('dashboard__item__button--return');  // Remove a classe de 'devolver' do botão
            botao.classList.add('dashboard__item__button');             // Mantém a classe 'alugar' do botão
            botao.textContent = 'Alugar';                               // Altera o texto do botão para "Alugar"
        }

    } else {                                                            // Caso o jogo não esteja alugado
        imagem.classList.add('dashboard__item__img--rented');           // Adiciona a classe que indica alugado
        botao.classList.add('dashboard__item__button--return');         // Adiciona a classe do botão 'devolver'
        botao.textContent = 'Devolver';                                 // Altera o texto do botão para "Devolver"
    }
}
