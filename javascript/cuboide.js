document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();

    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);

    if (isNaN(altura) || altura <= 0 || isNaN(largura) || largura <= 0 || isNaN(comprimento) || comprimento <= 0) {
        alert("Por favor, insira valores válidos para altura, largura e comprimento.");
        return;
    }

    let area = 2 * (altura * largura + altura * comprimento + largura * comprimento);
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
