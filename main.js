console.log("JavaScript Loaded!");

const introSection = document.getElementById("intro-section");
console.dir(introSection);

// Counter Logic
const counterElement = document.querySelector("#counter");
console.dir(counterElement);

const display = counterElement.querySelector("span");
console.log(display);

const incrementButton = counterElement.querySelector(".increment");

if (incrementButton === null) {
  throw new Error("Increment button not found");
}

console.log(incrementButton);

function handleIncrement() {
  // Hente nåværendes verdi
  const currentValue = Number(display.textContent);

  // legg til 1
  const newValue = currentValue + 1;

  // Oppdater verdien på element
  display.textContent = newValue;
}

incrementButton.addEventListener("click", handleIncrement);
