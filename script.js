function soma(){
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.getElementById("n2").value)
    let res = document.getElementById("res")
    let res1 = num1 + num2
    res.innerHTML = "O resultado é " + res1
}
function subtracao(){
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.getElementById("n2").value)
    let res = document.getElementById("res")
    let res1 = num1 - num2
    res.innerHTML = "O resultado é " + res1

}
function multiplicacao(){
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.getElementById("n2").value)
    let res = document.getElementById("res")
    let res1 = num1 * num2
    res.innerHTML = "O resultado é " + res1

}
function divisao(){
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.getElementById("n2").value)
    let res = document.getElementById("res")
    let res1 = num1 / num2
    res.innerHTML = "O resultado é " + res1

}