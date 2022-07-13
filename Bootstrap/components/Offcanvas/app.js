const btnPrimary = document.querySelector('.btn-primary')
const offcanvas = document.querySelector('.offcanvas')
const btnClose = document.querySelector('.btn-close')
const dropdownBtn = document.querySelector('.btn')
const dropdownMenu = document.querySelector('.dropdown-menu')

btnPrimary.addEventListener('click', () => {
    offcanvas.classList.add('active')
})

btnClose.addEventListener('click', () => {
    offcanvas.classList.remove('active')
})

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active')
})
1