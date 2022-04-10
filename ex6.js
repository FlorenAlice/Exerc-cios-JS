const botao = document.getElementById("botao");

function alerta() {
      const nome = document.getElementById("nome");
      const sobrenome = document.getElementById("sobrenome");

			 alert("Olá " + nome.value + " " + sobrenome.value);
      
      nome.value = ""
      sobrenome.value = ""
}
