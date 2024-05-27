//Chamamento via js
document.querySelector('div#teste').addEventListener('click',teste1)

function teste1() {
    document.querySelector('div#teste').style.backgroundColor = 'red'
}

function teste2() {
    div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = 'red'
    document.getElementById('x').appendChild(div)
}