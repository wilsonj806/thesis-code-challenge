const hamburger = document.getElementById('navBurger')
const close = document.getElementById('close')

hamburger.addEventListener('click', () => {
  const navMenu = document.getElementById('navMenu')
  const open = navMenu.getAttribute('data-open')
  console.log(open)

  if (open == 'false') {
    navMenu.classList.add('nav__menu--active')
    navMenu.setAttribute('data-open','true')
  }
})

close.addEventListener('click', () => {
  const navMenu = document.getElementById('navMenu')
  navMenu.classList.remove('nav__menu--active')
  navMenu.setAttribute('data-open','false')

})
