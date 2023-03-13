

const button = document.getElementById('button')
const overlay = document.getElementById('modal__overlay')
const modalWindow = document.getElementById('modal__window')
const position = document.getElementById('modal__position')

button.onclick = () => {
    overlay.classList.add('modal__overlay-active')
    modalWindow.classList.add('modal__window-active')
}

document.addEventListener('click', (e) => {
    e.target === position ? (overlay.classList.remove('modal__overlay-active'),
    modalWindow.classList.remove('modal__window-active')) : null
})