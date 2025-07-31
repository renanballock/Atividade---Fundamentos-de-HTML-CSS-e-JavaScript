const input = document.getElementById("novo-item-input");
const button = document.getElementById("adicionar-btn");
const ul = document.getElementById("minha-lista");

addEventListener('Click' , () => {
    getValueById('novo-item-input');
    if(input.value.trim() === "") {
        alert("Por favor, digite um item válido.");
    }else{
        document.createElement('li')
        textContent = input.value;
        lista.appendChild(novoItemLi);
        input.value = '';
    }
})