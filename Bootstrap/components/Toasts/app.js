const btn = document.querySelector('.btn')
const toast = document.querySelector('.toast')
const btnClose = document.querySelector('.btn-close')



btn.addEventListener('click', () => {
    toast.classList.add('active')
})

btnClose.addEventListener('click', () => {
    toast.classList.remove('active')
})
1