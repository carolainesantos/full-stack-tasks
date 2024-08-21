const checkbox = document.getElementById("mostrarSenha");
const senhaInput = document.getElementById("senha");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
});
