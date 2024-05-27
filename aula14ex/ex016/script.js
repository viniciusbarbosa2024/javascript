function contagem() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var i = Number(document.getElementById('ini').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        if(p != 0) {
            if (i<f) {
                res.innerHTML = ''
                for (var c = i;c<=f;c+= p) {
                    res.innerHTML += "&#x1F449 " + c
                }
                res.innerHTML += '&#x1F3C1 '
            } else {
                res.innerHTML = ''
                for (var c=i;c>=f;c-= p) {
                    res.innerHTML += "&#x1F449 " + c
                }
                res.innerHTML += '&#x1F3C1 '    
            }  
        } else {
            window.alert('Passo inválido,considerando passo = 1')
            p = 1
            if (i<f) {
                res.innerHTML = ''
                for (var c = i;c<=f;c+= p) {
                    res.innerHTML += "&#x1F449 " + c
                }
                res.innerHTML += '&#x1F3C1'
            } else {
                res.innerHTML = ''
                for (var c=i;c>=f;c-= p) {
                    res.innerHTML += "&#x1F449 " + c
                }
                res.innerHTML += '&#x1F3C1'    
            }  

        } 
 
    }
    
    
    
}



