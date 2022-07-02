const shoppingList = ['Arroz', 'Feijão', 'Açucar', 'Café', 'Carne', 'Pão']

const listEl = document.getElementById('list')
const searchField = document.getElementById('searchField')

searchField.addEventListener('input', inputHandler)

this.fillList()

// Vamos criar um método fillList para atualizar a DOM. Caso ele não receba nenhum parâmetro, ele usa a shoppingList
function fillList(list = shoppingList) {
  // Toda vez que a lista é atualizada, a gente precisa apagar o que já tinha
  listEl.innerHTML = ''

  for (let i = 0; i < list.length; i++) {
    let listItems = document.createElement('li')
    listItems.innerHTML = list[i]
    listEl.appendChild(listItems)
  }
}

function inputHandler() {
  const filteredList = shoppingList.filter(el => {
    // Para evitar sofrer com letras maiusculas
    const listItem = el.toLowerCase()
    const searchWord = searchField.value.toLowerCase()

    return listItem.includes(searchWord)
  })

  // Toda vez que o campo de busca muda, nós chamamos o fillList novamente
  fillList(filteredList)
}
