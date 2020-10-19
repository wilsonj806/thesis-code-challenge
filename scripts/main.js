const checkBrowserWidth = () => {
  const width = Math.max(document.body.scrollWidth, document.body.offsetWidth);
  if (width >= 1000) {
    // check if the nav dropdown is open or not and if the nav is there
    const primaryList = document.getElementById('primaryList')
    primaryList.setAttribute('style','display: flex; visibility:visibile');
    const navMenu = document.getElementById('navMenu')
    navMenu.setAttribute('data-open', 'false')
    navMenu.classList.remove('nav__menu--active')

  } else {
    // hide nav menu, display the dropdown contents
    const primaryList = document.getElementById('primaryList')
    primaryList.setAttribute('style','display: none; visibility:hidden; width: 0;');
  }
}
checkBrowserWidth()

window.addEventListener('resize', checkBrowserWidth)