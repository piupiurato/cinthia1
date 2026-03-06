const musica = document.getElementById("musica");

function iniciarMusica() {
  musica.play();
  document.removeEventListener("click", iniciarMusica);
}

document.addEventListener("click", iniciarMusica);

function mensagem() {
  document.getElementById("surpresa").innerHTML =
    "Cinthia, cada foto aqui guarda um pedaço do meu coração ❤️";
}

// corações a cair

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");

  coracao.innerHTML = "❤️";

  coracao.style.left = Math.random() * window.innerWidth + "px";
  coracao.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);
