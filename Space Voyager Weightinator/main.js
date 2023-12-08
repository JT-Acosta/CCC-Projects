
// We are going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
// 2. Write the code to return the correct weight
// 3. Declare a variable called userWeight and assign the value of the user's weight.
// 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down.
// 5. Declare a variable called result and assign the value of the new calculated weight.
// 6. Write code to display the message shown in the screenshot.
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page
// 8. Reverse the drop down order so that the sun is first.
const planets = [
  ['Sun', 27.9],
  ['Mercury', 0.377],
  ['Venus', 0.9032],
  ['Earth', 1],
  ['Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.64],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.06],
];

const calculateWeight = (weight, planetName) => {
  const planet = planets.find(planet => planet[0] === planetName);
    if (planetName === 'Sun') {
    const sunWeight = Math.round(weight * 27.9);
    return `Your weight on the ${planetName} would be: ${sunWeight} LBs`;
  } else if (planetName === 'Moon') {
    const moonWeight = Math.round(weight * 0.1655);
    return `Your weight on the ${planetName} would be: ${moonWeight} LBs`;
  } else if (planet) {
    const multiplier = planet[1];
    const planetWeight = Math.round(weight * multiplier);
    return `Your weight on ${planetName} would be: ${planetWeight} LBs`;
  } else {
    return 'Planet Not Found';
  }
};

const handleClickEvent = () => {
  const userWeight = Number(document.getElementById('userWeight').value);
  const selectedPlanet = document.getElementById('planets').value;
  const display = document.getElementById('result');
  if (Number(userWeight)) {
    const output = calculateWeight(userWeight, selectedPlanet);
    display.textContent = output;
    display.classList.add('pulse');
  } else {
    display.textContent = 'Enter Valid Weight';
    display.classList.add('pulse');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateButton');
  if (calculateButton) {
    calculateButton.addEventListener('click', handleClickEvent);
  }
});

const reset = () => {
  document.getElementById('userWeight').value = '';
  document.getElementById('planets').value = '';
  document.getElementById('result').textContent = '';
  let checkboxPluto = document.getElementById('checkPluto');
  checkboxPluto.checked = false;
};

document.addEventListener('DOMContentLoaded', () => {
  const resetButton = document.getElementById('resetButton');
  if (resetButton) {
    resetButton.addEventListener('click', reset);
  }
});

const populateDropdown = () => {
  let checkboxPluto = document.getElementById('checkPluto');
  let dropdown = document.getElementById('planets');
  let plutoOption = document.querySelector('option[value="Pluto"]');
  if (checkboxPluto.checked && !plutoOption) {
    let newOption = document.createElement('option');
    newOption.value = 'Pluto';
    newOption.textContent = 'Pluto';
    dropdown.appendChild(newOption);
  } else if (!checkboxPluto.checked && plutoOption) {
    dropdown.removeChild(plutoOption);
  }
};

