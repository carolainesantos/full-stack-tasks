const checkbox = document.getElementById("mostrarSenha");
const senhaInput = document.getElementById("senha");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
});

document.getElementById("meuForm").addEventListener("submit", function (event) {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Verifica se algum campo obrigatório está vazio
  if (!nome || !email || !senha) {
    // Exibe uma mensagem de aviso
    alert("Por favor, preencha todos os campos obrigatórios.");
    // Impede o envio do formulário
    event.preventDefault();
  }
});
