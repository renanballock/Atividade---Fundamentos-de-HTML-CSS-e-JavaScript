const alterTema = document.getElementById("alterar-tema-btn");
const corpo = document.body;

addEventListener('click', () => {
    const darkModeAtivo = corpo.classList.toggle("dark-theme");
    botaoCalc.textContent = darkModeAtivo ? "Desativar Tema Escuro" : "Ativar Tema Escuro";
});