const listaProjetos = [
  {
    nome: 'Lâmpada',
    link: './lampada-js/lampada.html',
    img: './lampada-js/img/ligada.jpg',
    alt: 'Projeto da lampada'
  },
  {
    nome: 'Semáforo',
    link: './Semaforo/semaforo.html',
    img: './img_index/semaforo.png',
    alt: 'Projeto do semáforo'
  },
  {
    nome: 'Jogo da memória',
    link: 'https://adrianodbs.github.io/Jogo-da-mem-ria/',
    img: './img_index/jogo-da-memoria.png',
    alt: 'Jogo da memória'
  },
  {
    nome: 'Modo noturno',
    link: './modo-noturno/noturno.html',
    img: './img_index/lua.png',
    alt: 'Projeto do modo noturno'
  },
  {
    nome: 'Card animado',
    link: './Cartao-animado/cartao.html',
    img: './img_index/Guerreiro.png',
    alt: 'card de um guerreiro'
  },
  {
    nome: 'Dicionário PT/BR',
    link: './Projeto-dicionario/dicionario.html',
    img: './img_index/dicionario.png',
    alt: 'Dicionário'
  },
  {
    nome: 'To do list (Lista de tarefas)',
    link: './TODO-list/todo.html',
    img: './img_index/todo.jpg',
    alt: 'Lista de tarefas'
  },
  {
    nome: 'CRUD',
    link: './CRUD/crud.html',
    img: './img_index/crud.png',
    alt: 'CRUD'
  },
  {
    nome: 'Mochila de viagem',
    link: './mochila-viagem/mochila.html',
    img: './img_index/mochila.png',
    alt: 'Projeto mochila de viagem'
  },
  {
    nome: 'Cronômetro',
    link: './cronometro/cronometro.html',
    img: './img_index/cronometros.png',
    alt: 'Projeto do Cronômetro'
  },
  {
    nome: 'Slideshow',
    link: './slideshow/slideshow.html',
    img: './img_index/slideshow.png',
    alt: 'Slideshow'
  },
  {
    nome: 'Relógio digital',
    link: './relogio/index.html',
    img: './img_index/relogio.png',
    alt: 'Projeto do Relógio'
  },
  {
    nome: 'Modal',
    link: './modal/index.html',
    img: './img_index/modal.png',
    alt: 'Modal'
  },
  {
    nome: 'Gerador de gradiente',
    link: './gerador-de-gradiente/index.html',
    img: './img_index/gradiente.png',
    alt: 'Gerador de gradiente'
  },
  {
    nome: 'Jogo de Super Mario',
    link: 'https://adrianodbs.github.io/Jogo-mario/',
    img: './img_index/super-mario.png',
    alt: 'Super Mario'
  },
  {
    nome: 'Jogo da velha',
    link: './jogo-da-velha/index.html',
    img: './img_index/jogo-da-velha.png',
    alt: 'Jogo da Velha'
  },
  {
    nome: 'Gerador de box shadow',
    link: './gerador-de-box-shadow/index.html',
    img: './img_index/shadow.png',
    alt: 'Gerador de Box Shadow'
  },
  {
    nome: 'Quiz JS',
    link: './quiz-js/index.html',
    img: './img_index/quiz.png',
    alt: 'Quiz JavaScript'
  },
  {
    nome: 'Calculadora',
    link: './calculadora/index.html',
    img: './img_index/calculadora.png',
    alt: 'Calculadora'
  },
  {
    nome: 'Drag and Drop (Kanban)',
    link: './DragAndDrop/index.html',
    img: './img_index/drag-and-drop.png',
    alt: 'Kanban'
  },
  {
    nome: 'Lista com filtro',
    link: './lista-com-filtro/index.html',
    img: './img_index/filtro.png',
    alt: 'Filtro'
  },
  {
    nome: 'Menu flutuante',
    link: './menu-flutuante/index.html',
    img: './img_index/barra-de-menu.png',
    alt: 'Menu'
  },
  {
    nome: 'Pomodoro',
    link: 'https://pomodoro-omega-eight.vercel.app/',
    img: './img_index/pomodoro.png',
    alt: 'Pomodoro'
  },
  {
    nome: 'Previsão do tempo',
    link: './previsao-tempo/index.html',
    img: './img_index/nublado.png',
    alt: 'Previsão do tempo'
  }
]

const projetos = document.querySelector('.projetos')

listaProjetos.forEach(item => {
  projetos.innerHTML += `
  <div class="card">
  <a href="${item.link}">
    <img
      src="${item.img}"
      alt="${item.alt}"
      class="card-60px"
    />
    <p>${item.nome}</p>
  </a>
  </div>
  `
})
