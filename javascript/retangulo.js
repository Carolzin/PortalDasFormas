document.getElementById("calcularBtn").addEventListener("click", function(event) {
    event.preventDefault();
    let altura = parseFloat(document.getElementById("altura").value);
    let base = parseFloat(document.getElementById("base").value);
    
    if (isNaN(altura) || altura <= 0 || isNaN(base) || base <= 0) {
        alert("Por favor, insira valores válidos para altura e base.");
        return;
    }
    
    let area = altura * base;
    document.getElementById("resultado").innerText = `A área é: ${area.toFixed(2)}`;
});
