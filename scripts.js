// Função para gerar o número aleatório
function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    // Verifica se o valor mínimo é menor ou igual ao máximo
    if (min > max) {
        document.querySelector(".result").textContent = "O valor mínimo deve ser menor ou igual ao valor máximo.";
        document.querySelector(".result").style.display = 'block'; // Exibe a div com a mensagem de erro
        document.querySelector(".reset-btn").style.display = 'none'; // Oculta o botão de reset
        return;
    }

    // Gera o número aleatório
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Atualiza o texto e exibe a div com o resultado
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = `Resultado: ${result}`;
    resultDiv.style.display = 'block'; // Exibe a div com o resultado

    // Mostra o botão de reset
    document.querySelector(".reset-btn").style.display = 'block';
}

// Função para resetar os campos e ocultar o resultado
function resetFields() {
    document.querySelector(".input-min").value = '';
    document.querySelector(".input-max").value = '';
    const resultDiv = document.querySelector(".result");
    resultDiv.style.display = 'none'; // Oculta a div com o resultado

    // Oculta o botão de reset
    document.querySelector(".reset-btn").style.display = 'none';
}

// Adiciona um ouvinte de eventos para o evento keydown
window.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é o Enter e se o foco está em um campo de entrada
    if (event.key === 'Enter' && document.activeElement.matches('.input-min, .input-max')) {
        event.preventDefault(); // Previne o comportamento padrão do Enter
        generateNumber();
    }
});
