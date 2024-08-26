let array = []
let res = document.getElementById("res")
function gerar(max,min){
    let valor_aleatorio = 0
    for(let i=0;i<5;i++){
        valor_aleatorio = Math.floor(Math.random() * (max - min + 1) ) + min
        array.push(Number(valor_aleatorio))
    }
    console.table(array)
    res.innerHTML = `O array gerado é igual a: ${array}`
}
function somar(){
    let somaPar = 0
    let somaImpar = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            somaPar += array[i]
        }else{
            somaImpar += array[i]
        }
    }
    res.innerHTML += `<br>A soma dos Números Pares é igual a: ${somaPar}, e dos Ímpares é igual a: ${somaImpar}`
}