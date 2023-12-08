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

