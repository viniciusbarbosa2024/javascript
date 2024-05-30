let num = document.getElementById('num')
let acomp = document.getElementById('status')
let n = []
let res = document.getElementById('res')

function feedback() {

    
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || n.indexOf(num.value) != -1) {
        window.alert('Valor inválido ou já adicionado na lista')
   
    } else {
        //Para o valor adicionado aparecer no select
        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado`
        acomp.appendChild(option)

        //Guardando valor adicionado
        n.push(num.value)

        //Limpando input de adicionar números
        num.value = ''
    }

}

function analizador() {  
    if(n.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        for (let c=1; c <=5; c++) {
            let criarp = document.createElement('p')
            criarp.setAttribute('class','pres')
            res.appendChild(criarp)
        }

        let p = document.getElementsByClassName('pres')

        p[0].innerHTML = `Ao todo temos ${n.length} números adicionados`
    
        p[1].innerHTML = `O maior valor informado foi ${maiorvalor()}`

        p[2].innerHTML = `O menor valor informado foi ${menorvalor()}`

        p[3].innerHTML = `A soma de todos os valores é ${soma()}`

        p[4].innerHTML = `A média dos valores é ${media().toFixed(2)}`
    }
    

}

function maiorvalor() {
    n.sort()
    return n[n.length -1]
}

function menorvalor() {
    n.sort()
    return n[0]
}

function soma() {
    let s = 0
    for(let pos in n) {
        s += Number(n[pos])   
    }
    return s
}

function media() {
    let m = 0
    m = soma() / (n.length)
    return m
}