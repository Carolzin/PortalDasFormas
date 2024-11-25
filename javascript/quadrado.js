document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let lado = parseFloat(document.getElementById("lado").value);

    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, insira um valor válido para o lado.");
        return;
    }

    let area = Math.pow(lado, 2);
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
