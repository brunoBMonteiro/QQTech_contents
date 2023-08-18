document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('wine-form');
  const addButton = document.getElementById('add-button');
  const totalElement = document.getElementById('total');
  const tintoElement = document.getElementById('percentage-tinto');
  const brancoElement = document.getElementById('percentage-branco');
  const roseElement = document.getElementById('percentage-rose');
  const resultsDiv = document.getElementById('results');

  let totalVinhos = 0;
  let totalTinto = 0;
  let totalBranco = 0;
  let totalRose = 0;

  addButton.addEventListener('click', function() {
    const wineType = document.getElementById('wine-type').value;
    const wineQuantity = parseInt(document.getElementById('wine-quantity').value);

    totalVinhos += wineQuantity;

    if (wineType === 'T') {
      totalTinto += wineQuantity;
    } else if (wineType === 'B') {
      totalBranco += wineQuantity;
    } else if (wineType === 'R') {
      totalRose += wineQuantity;
    }

    updateResults();
  });

  function updateResults() {
    const porcentagemTinto = calcularPorcentagem(totalTinto, totalVinhos);
    const porcentagemBranco = calcularPorcentagem(totalBranco, totalVinhos);
    const porcentagemRose = calcularPorcentagem(totalRose, totalVinhos);

    totalElement.textContent = `Total de vinhos: ${totalVinhos}`;
    tintoElement.textContent = `Porcentagem de vinhos tintos: ${porcentagemTinto.toFixed(2)}%`;
    brancoElement.textContent = `Porcentagem de vinhos brancos: ${porcentagemBranco.toFixed(2)}%`;
    roseElement.textContent = `Porcentagem de vinhos rose: ${porcentagemRose.toFixed(2)}%`;

    resultsDiv.style.display = 'block';
  }

  function calcularPorcentagem(valor, total) {
    return (valor / total) * 100;
  }
});