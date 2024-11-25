document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();

    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para a base e altura.");
        return;
    }

    let area = base * altura;
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
