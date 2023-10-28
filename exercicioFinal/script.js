const botao = document.getElementById('btn')
const finalbotao = document.getElementById('finalbtn')
let texto = document.getElementById('textarea')
let resposta = document.getElementById('res')
var numeros = []
let soma = 0

let divAumentada = false

botao.addEventListener("click", function(){
    let number = document.getElementById('numero')
    if (!isNaN(parseFloat(number.value))){
        texto.value += `Número ${number.value} adicionado.\n`
        numeros.push(number.value)
    } else {
        window.alert('Adicione um número válido!')
    }
})

finalbotao.addEventListener("click", function(){

    resposta.innerHTML = ''
    if (!divAumentada){
        var box = document.getElementById('box')
        var alturaAtual = box.offsetHeight
        box.style.height = (alturaAtual + 50) + 'px'
        divAumentada = true
    }

    if(numeros.length === 0){
        window.alert('Adicione ao menos um número!')
    } else {

       /*resposta.innerHTML = `Ao todo, temos ${numeros.length} adicionados<br>`*/
        numeros.sort
        index = Number(numeros.length)
        resposta.innerHTML += `O maior valor informado foi ${numeros[index-1]}<br>`
        resposta.innerHTML += `O menos valor informado foi ${numeros[0]}<br>`
        for (let x = 0; x<index; x++){
            soma += Number.parseFloat(numeros[x])
        }
        resposta.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        resposta.innerHTML += `A média dos valores digitado é ${soma/index}<br>` 

}
    
    texto.value = null


})