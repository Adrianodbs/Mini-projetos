'use strict'

const images = [
  { id: '1', url: './Imagens/1.jpg' },
  { id: '2', url: './Imagens/2.jpg' },
  { id: '3', url: './Imagens/3.jpg' },
  { id: '4', url: './Imagens/4.jpg' },
  { id: '5', url: './Imagens/5.jpg' },
  { id: '6', url: './Imagens/6.jpg' }
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
    <div class = 'item'>
      <img src='${image.url}'/>
    </div> 
    `
  })
}

loadImages(images, containerItems)
let items = document.querySelectorAll('.item')

const previous = () => {
  containerItems.appendChild(items[0])
  items = document.querySelectorAll('.item')
}

const next = () => {
  const lastItem = items[items.length - 1]
  containerItems.insertBefore(lastItem, items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)
