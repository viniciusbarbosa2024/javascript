function contagem() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    for (var c = Number(ini.value);c<=Number(fim.value);c+=Number(passo.value)) {
        res.innerHTML += c
    }
}

