let form = document.getElementById("form");
let mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        mensagem.textContent = "Tente novamente";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Tente novamente";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "Tente novamente";
        return;
    }

    mensagem.textContent = "Login realizado";
    form.reset();
});