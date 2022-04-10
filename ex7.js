let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function Calculos() {

    const resto = document.getElementById("resto");

    resto.innerHTML += `A soma dos valores: ${parseInt(num1.value) + parseInt(num2.value)}<br>`
    resto.innerHTML += `A subtração dos valores: ${num1.value - num2.value}<br>`
    resto.innerHTML += `A multiplicação dos valores: ${num1.value * num2.value}<br>`
    resto.innerHTML += `A divisão dos valores: ${num1.value/num2.value}<br>`;
    resto.innerHTML += `A potenciação dos valore:${Math.pow(num1.value, num2.value)}`
				
}

