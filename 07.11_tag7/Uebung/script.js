const button = document.querySelector(".button");
const buttonzwei = document.querySelector(".button_zwei");
const container = document.querySelector(".container");

// toggle
button.addEventListener("click", () => {
  document.body.classList.toggle("neufarbe");
});

// neuen Absatz erstellen
function createParagraph() {
  const neusatz = document.createElement("p");
  neusatz.textContent = "Surprise! Ich bin ein neuer Absatz.";
  neusatz.classList.add("neuabsatz");

  // verschwinden
  neusatz.addEventListener("click", () => {
    neusatz.textContent = "Schon gut, ich verschwinde wieder.";
    neusatz.classList.remove("neuabsatz");
    neusatz.classList.add("weg");
  });

  // nach der Animation
  neusatz.addEventListener("animationend", () => {
    neusatz.remove();
  });

  container.appendChild(neusatz);
}

buttonzwei.addEventListener("click", createParagraph);