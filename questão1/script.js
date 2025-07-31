    const input = document.getElementById('input-nome');
    const mensagemErro = document.getElementById('mensagem-erro');
    const button = document.getElementById('validar-btn');

    button.addEventListener('click', () => {
        if(button.ariaValueMax.trim() ===""){
            mensagemErro.textContent = "Por favor, digite seu nome. ";
            mensagemErro.style.display = 'block';
        }else{
            mensagemErro.textContent = "";
            mensagemErro.style.display = 'none';
        } 
    });

   
    

