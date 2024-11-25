document.getElementById("calcularBtn").addEventListener("click", function(event) {

    event.preventDefault();

    let raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    let area = Math.PI * Math.pow(raio, 2);

    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}.`;
});
