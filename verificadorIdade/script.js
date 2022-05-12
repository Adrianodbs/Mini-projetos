function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formAno = document.getElementById('txtano')
  var resultado = document.getElementById('resultado')

  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert('verifique os dados e tente novamente')
  } else {
    var formSexo = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    // para criar um ID para essa foto, usamos
    img.setAttribute('id', 'foto')

    if (formSexo[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/ch.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', './img/jh.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './img/ah.jpg')
      } else {
        img.setAttribute('src', './img/ih.jpg')
      }
    } else if (formSexo[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/cm.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', './img/jm.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './img/am.jpg')
      } else {
        img.setAttribute('src', './img/im.jpg')
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)
  }
}
