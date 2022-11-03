const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')

const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {}

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    //Para pegar o valor dos botões
    const value = e.target.innerText

    console.log(value)
  })
})
