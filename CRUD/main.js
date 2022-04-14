'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () =>
  document.getElementById('modal').classList.remove('active')

const tempClient = {
  nome: 'Adriano',
  email: 'adriano@a.com',
  celular: '749998869950',
  cidade: 'Mundo Novo'
}
// CRUD - creat read update delete

const createClient = client => {
  // Para pegar o que tem no banco de dados e transformar em JSON e armazena dentro de uma variavel chamada client
  const db_client = JSON.parse(localStorage.getItem('db_client'))
  // O push serve para acrescentar mais um
  db_client.push(client)
  // Set serve para enviar
  // JSON.stringify serve para transformar os objetos em uma string
  localStorage.setItem('db_client', JSON.stringify(db_client))
}

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
