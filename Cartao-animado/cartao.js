document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.className === 'det__btn') {
      document.querySelector('.card__details').classList.add('open')
    }

    if (btn.className === 'back__btn') {
      document.querySelector('.card__details').classList.remove('open')
    }
  })
})
