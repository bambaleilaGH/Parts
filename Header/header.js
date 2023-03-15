

const toggle = document.getElementById('m_header__toggle')
const menu = document.getElementById('m_header__menu')
const xmark = document.getElementById('m_header__xmark')

toggle.onclick = () => {
    menu.style.width = '100%'
}

xmark.onclick = () => {
    menu.style.width = '0%'
}
