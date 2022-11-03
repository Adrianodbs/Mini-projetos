const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')

const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation = ''
  }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    //Para pegar o valor dos botões
    const value = e.target.innerText

    //Para observar se está clicando em um número
    if (+value >= 0 || value === '.') {
    } else {
    }
  })
})
