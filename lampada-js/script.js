const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

// Função para verificar se a lâmpada está quebrada ou não

function isLampBroken() {
  // IndexOf faz uma varredura em uma string procurando um outro techo de string, ou seja, se dentro do src tiver a palavra 'quebrada', é porque a lâmpada está quebrada, dessa forma não vai trazer o valor -1.
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = './img/ligada.jpg'
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = './img/desligada.jpg'
  }
}

function lampBroken() {
  lamp.src = './img/quebrada.jpg'
}

// utilizado para conseguir escutar o click
turnOn.addEventListener('click', lampOn)

turnOff.addEventListener('click', lampOff)

// Ação na lâmpada quando o mouse passar
lamp.addEventListener('mouseover', lampOn)

lamp.addEventListener('mouseleave', lampOff)

// Duplo click para quebrar
lamp.addEventListener('dblclick', lampBroken)
