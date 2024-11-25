document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();
    let baseMaior = parseFloat(document.getElementById("baseMaior").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(baseMaior) || baseMaior <= 0 || isNaN(baseMenor) || baseMenor <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para as bases e altura.");
        return;
    }
    
    let area = ((baseMaior + baseMenor) * altura) / 2;
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
