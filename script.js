const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

const pergunta = document.getElementById("pergunta");
const final = document.getElementById("final");

const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");
const tempo = document.getElementById("tempo");


function fugir() {

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const novaPosicaoX =
        Math.random() * (largura - larguraBotao);

    const novaPosicaoY =
        Math.random() * (altura - alturaBotao);

    botaoNao.style.position = "fixed";

    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
}

botaoNao.addEventListener("mouseenter", fugir);


// QUANDO CLICAR NO SIM
botaoSim.addEventListener("click", function() {

    pergunta.style.display = "none";
    final.style.display = "flex";

    // começa a música automaticamente
    musica.play();

});


// BOTÃO DA MÚSICA
botaoMusica.addEventListener("click", function() {

    if (musica.paused) {

        musica.play();
        botaoMusica.innerHTML = "❚❚";

    } else {

        musica.pause();
        botaoMusica.innerHTML = "♥";

    }

});


// ATUALIZA O TEMPO DA MÚSICA
musica.addEventListener("loadedmetadata", function() {
    atualizarTempo();
});

musica.addEventListener("timeupdate", function() {
    atualizarTempo();
});


function atualizarTempo() {

    const atual = formatarTempo(musica.currentTime);
    const total = formatarTempo(musica.duration);

    tempo.textContent = atual + " / " + total;
}


function formatarTempo(segundos) {

    if (isNaN(segundos)) {
        return "0:00";
    }

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60);

    return minutos + ":" +
        String(segundosRestantes).padStart(2, "0");
}