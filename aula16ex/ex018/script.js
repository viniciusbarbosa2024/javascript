function feedback() {
    let num = document.getElementById('num')
    let status = document.getElementById('status')
    let n = []
    
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || n.indexOf(num.value) != -1) {
        window.alert('Valor inválido ou já adicionado na lista')
   
    } else {
        //Para o valor adicionado aparecer no select
        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado`
        status.appendChild(option)

        n.push(num.value)
    }

}
