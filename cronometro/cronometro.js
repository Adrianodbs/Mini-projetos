let segundos = 00
let minutos = 00
let horas = 00
let intervalo

function doisDigitos(digito) {
  if (digito < 10) {
    return '0' + digito
  } else {
    return digito
  }
}

function iniciar() {
  // Já chamei a função "relógio" logo no início para começar no 1 e não no zero
  relogio()
  // Ou seja, a função vai ser chamada a cada 1 segundo (1000 milesegundos)
  intervalo = setInterval(relogio, 1000)
}

function pausar() {
  clearInterval(intervalo)
}

function parar() {
  clearInterval(intervalo)
  segundos = 0
  minutos = 0

  document.getElementById('relogio').innerText = '00:00:00'
}

function relogio() {
  segundos++
  if (segundos == 60) {
    minutos++
    segundos = 0
    if (minutos == 60) {
      minutos = 0
      horas++
    }
  }
  document.getElementById('relogio').innerText =
    doisDigitos(horas) +
    ':' +
    doisDigitos(minutos) +
    ':' +
    doisDigitos(segundos)
}
