function Verificar() {
    var data = new Date()
    var anoat = data.getFullYear()
    var ano = document.querySelector('input#itxtano')
    var res = document.querySelector('div#res')

    if (ano.value > anoat || ano.value.length == 0) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var idade = anoat - ano.value
        var fsex = document.getElementsByName('sex')
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','imagens/menino.jpg')        
            } else if (idade<21) {
                img.setAttribute('src','imagens/homem-jovem.jpg')    
            } else if (idade<50) {
                img.setAttribute('src','imagens/homem-adulto.jpg')
            } else {
                img.setAttribute('src','imagens/homem-idoso.jpg')
            }
        } else {
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','imagens/menina.jpg')        
            } else if (idade<21) {
                img.setAttribute('src','imagens/mulher-jovem.jpg')    
            } else if (idade<50) {
                img.setAttribute('src','imagens/mulher-adulta.jpg')
            } else {
                img.setAttribute('src','imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        res.appendChild(img)
        res.style.textAlign = 'center'
        
    }
} 