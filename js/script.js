const header = document.getElementsByTagName('header')
const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelectorAll('.btnlogin-popup')
const menu_icon = document.querySelector('#menu-icone')
const menu = document.querySelector('#menu')
const iconClose = document.querySelector('.icon-close')
const homeButton = document.querySelectorAll('.home-button')
const aboutButton = document.querySelectorAll('.about-button')
const contactButton = document.querySelectorAll('.contact-button')
const serverButton = document.querySelectorAll('.server-button')
const idade = document.getElementById('years')
const aboutme = document.getElementById('sobre_mim')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

btnPopup.forEach(btnPopup =>{
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.remove('active-home')
        wrapper.classList.remove('active-about')
        wrapper.classList.remove('active-contact')
        wrapper.classList.remove('active-server')
        wrapper.classList.add('active-popup')
    })

})

menu_icon.addEventListener('click', ()=> {
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }

    else {
        menu.style.display = 'flex'
    }

})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})

// Configs adicionais

homeButton.forEach(homeButton => {
    homeButton.addEventListener('click', ()=> {
        wrapper.classList.remove('active')
        wrapper.classList.remove('active-about')
        wrapper.classList.remove('active-contact')
        wrapper.classList.remove('active-server')
        wrapper.classList.add('active-home')
        wrapper.classList.add('active-popup')
    })

})

aboutButton.forEach(aboutButton => {
    aboutButton.addEventListener('click', ()=> {
        wrapper.classList.remove('active')
        wrapper.classList.remove('active-home')
        wrapper.classList.remove('active-contact')
        wrapper.classList.remove('active-server')
        wrapper.classList.add('active-popup')
        wrapper.classList.add('active-about')
    })
    
})


contactButton.forEach(contactButton => {
    contactButton.addEventListener('click', ()=> {
        wrapper.classList.remove('active')
        wrapper.classList.remove('active-home')
        wrapper.classList.remove('active-about')
        wrapper.classList.remove('active-server')
        wrapper.classList.add('active-popup')
        wrapper.classList.add('active-contact')
    })

})

serverButton.forEach(serverButton => {
    serverButton.addEventListener('click', ()=> {
        wrapper.classList.remove('active')
        wrapper.classList.remove('active-home')
        wrapper.classList.remove('active-about')
        wrapper.classList.remove('active-contact')
        wrapper.classList.add('active-popup')
        wrapper.classList.add('active-server')

    })
})
// Cacular minha idade

var data_atual = new Date()

var data_nascimento = new Date(2004, 11, 11)

// Subtração dos anos
var anos = data_atual.getFullYear() - data_nascimento.getFullYear()

if (data_atual.getMonth() != data_nascimento.getMonth()){

    // Verifica a diferença nos meses
    if (data_atual.getMonth() < data_nascimento.getMonth()){
        anos--
    }

    else{

        // Análisa o dia do mês
        if (data_atual.getDate() < data_nascimento.getDate()){
            anos--
        }
    }
}

// tradutor
idade.style.fontSize = '20px'
idade.style.cursor = 'pointer'
idade.innerText = 'I am ' + anos + ' years old'
var key_year = false

idade.addEventListener('click', ()=> {

    if (!key_year){
        idade.innerText = ''
        idade.innerText = 'Eu tenho ' + anos + ' anos'
        key_year = true
    }
    
    else {
        if (key_year){
            idade.innerText = 'I am ' + anos + ' years old'
            key_year = false
        }
    }
})

aboutme.style.cursor = 'pointer'
aboutme.innerText = 'A young person who is always seeking personal and professional growth, seeking knowledge in the field of programming and web development.'
key_about = false

aboutme.addEventListener('click', ()=> {
    
    if (key_about){
        aboutme.innerText = ''
            aboutme.innerText = 'A young person who is always seeking personal and professional growth, seeking knowledge in the field of programming and web development.'
            key_about = false
            console.log('falso')
    }
    
    else {
        if (!key_about){
            aboutme.innerText = ''
            aboutme.innerText = 'Um jovem que vem sempre procurando se desenvolver pessoalmente e profissionalmente, buscando conhecimento na área de programação e desenvolvimento web'
            console.log(key_about)
            key_about = true
            console.log('ativo')
            console.log(key_about)
            
        }
    }
})


function ocultarElemento() {
    if (window.innerWidth > 900) {
        menu.style.display = "none";
    } 
  }
  
window.addEventListener("resize", ocultarElemento);
