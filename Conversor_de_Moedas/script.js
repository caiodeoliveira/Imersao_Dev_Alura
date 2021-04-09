let input1 = document.querySelector(".real_input")
let input2 = document.querySelector(".canada_input")


let aviso = () => {
    alert("Aviso: não utilize pontos ao digitar o valor")
}

let result = input1.value * 0.22
input2.value = result.toFixed(2)