function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    var n = Number(num.value)

    if (num.value.length == 0) {
        tab.innerHTML = ''
        window.alert('Por favor,digite um número')
        var option = document.createElement('option')
        tab.appendChild(option) 
        option.text = 'Digite um número acima'
    } else{
        tab.innerHTML = ''
        for(var c = 1;c<=10;c++) {
            var option = document.createElement('option')
            tab.appendChild(option) 
            option.text = `${n}x${c} = ${n*c}` //anotar
        }
    }
    
    
}