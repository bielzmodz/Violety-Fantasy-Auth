document.addEventListener('DOMContentLoaded', () => {

    function redirecionarParaServidor() {
        const countdownElement = document.getElementById('countdown');
        let tempoRestante = 5;

        const interval = setInterval(() => {
            tempoRestante--;
            countdownElement.textContent = `Retornando em ${tempoRestante}...`;

            if (tempoRestante <= 0) {
                clearInterval(interval);

                window.location.href = 'https://discord.gg/5UuEGJGa'; 
            }
        }, 1000);
    }

    const sucessoElement = document.getElementById('verificacao-sucesso');
    if (sucessoElement) {

        redirecionarParaServidor();
    }
});
