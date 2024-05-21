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
        if (fsex[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        res.style.textAlign = 'center'
        
    }
} 