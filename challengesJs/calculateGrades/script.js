document.addEventListener("DOMContentLoaded", function () {
  const optionsSelect = document.getElementById("options");
  const noteInputsContainer = document.getElementById("noteInputs");
  const calculateButton = document.getElementById("calculateButton");
  const clearButton = document.getElementById("clearButton");
  const resultDisplay = document.getElementById("result");

  optionsSelect.addEventListener("change", function () {
    const numNotes = parseInt(optionsSelect.value);
    noteInputsContainer.innerHTML = ""; // Limpar inputs anteriores

    for (let i = 1; i <= numNotes; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Nota ${i}`;
      noteInputsContainer.appendChild(input);
    }

    noteInputsContainer.style.display = "block";
  });

  calculateButton.addEventListener("click", function () {
    const inputs = noteInputsContainer.querySelectorAll("input");
    let total = 0;
    const numNotes = inputs.length;

    inputs.forEach(input => {
      total += parseFloat(input.value || 0);
    });

    const average = total / numNotes;
    const name = document.getElementById("name").value;

    let status;
    if (average >= 6) {
      status = "Aprovado";
    } else {
      status = "Reprovado";
    }

    resultDisplay.textContent = `${name}: média: ${average.toFixed(2)} - ${status}`;
  });

  clearButton.addEventListener("click", function () {
    noteInputsContainer.innerHTML = "";
    // altera conteúdo de texto do elemento
    resultDisplay.textContent = "";
    document.getElementById("name").value = "";
    optionsSelect.selectedIndex = 0;
    noteInputsContainer.style.display = "none";
  });
});
