document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let lado = parseFloat(document.getElementById("lado").value);
    let nLados = parseInt(document.getElementById("nLados").value);

    if (isNaN(lado) || lado <= 0 || isNaN(nLados) || nLados < 3) {
        alert("Por favor, insira valores válidos para o lado e o número de lados (mínimo 3).");
        return;
    }

    let area = (nLados * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / nLados));
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
