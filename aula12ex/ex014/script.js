function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} horas`

    if (hora>=0 && hora<12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#3BA3EC'
    } else if (hora<18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#935E63'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#17282F'
    }
}