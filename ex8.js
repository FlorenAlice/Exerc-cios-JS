      const num = document.getElementById("num");
      const resultado = document.getElementById("resultado");
      const notas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
      
function Valores() {

      let numero = num.value;
      resultado.innerHTML = ``;
          
      for(let nota of notas){
      
      				const qntd = parseInt(num.value / nota);
      				numero = parseFloat(num.value % nota).toFixed(2);
      				
      				if(qntd > 0){
      					 resultado.innerHTML += `${qntd} nota(s) de ${nota}<br>`;
      				}
      }
				
}
