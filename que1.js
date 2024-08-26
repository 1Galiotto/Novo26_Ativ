let array = []
let res = document.getElementById('res')
function inserir(){
    let num1 = Number(document.getElementById("num1").value)    
    let num2 = Number(document.getElementById("num2").value)    
    let num3 = Number(document.getElementById("num3").value)    
    let num4 = Number(document.getElementById("num4").value)    
    let num5 = Number(document.getElementById("num5").value)
    
    array = [num1,num2,num3,num4,num5]
    console.log(array)
    console.log(array.length)
    console.table(array)

}
let media = 0
function calcular(){
    let soma = 0
    for(let i=0;i<array.length;i++){
        soma += array[i]
    }
    let media = soma / array.length
    console.log(soma)
    console.log(media)
    res.innerHTML = `A média dos números é igual a: ${media}`
    return media
}
inserir()
calcular()