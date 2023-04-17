const defaultKey = document.querySelectorAll('.default-key');
const result = document.querySelector('.result');
const deleteButton = document.querySelector('.delete-button');
const performCalculation = document.querySelector('.to-execute');
const signExchange = document.querySelector('.sign-exchange');

let operandPrevious = 0;
let operandCurrent = 0;
let clickedAddition = false;
let clickedSubtraction = false;
let clickedMultiplication = false;
let clickedDivision = false;
let divisionError = false;

defaultKey.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('addition')) {
      clickedAddition = true;
      operandPrevious = `${result.value}${'+'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (clickedAddition) {
      result.value = '';
      clickedAddition = false;
    }
    if (element.classList.contains('subtraction')) {
      clickedSubtraction = true;
      operandPrevious = `${result.value}${'-'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (clickedSubtraction) {
      result.value = '';
      clickedSubtraction = false;
    }
    if (element.classList.contains('multiplication')) {
      clickedMultiplication = true;
      operandPrevious = `${result.value}${'*'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (clickedMultiplication) {
      result.value = '';
      clickedMultiplication = false;
    }
    if (element.classList.contains('division')) {
      clickedDivision = true;
      operandPrevious = `${result.value}${'/'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
      divisionError = true;
    } else if (clickedDivision) {
      result.value = '';
      clickedDivision = false;
    }
    if (element.classList.contains('percentage')) {
      result.value = eval(operandPrevious + (result.value / 100 * operandCurrent));
    }
    let valorr = element.value;
    result.value += valorr;
  });
});

deleteButton.addEventListener('click', () => {
  result.value = '';
  operandPrevious = 0;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete' || event.key === 'Backspace') {
    result.value = result.value.slice(0, -1);
  } else if ((event.key >= '0' && event.key <= '9') || event.key === '.') {
    if (clickedAddition || clickedSubtraction || clickedMultiplication || clickedDivision) {
      result.value = '';
      clickedAddition = false;
      clickedSubtraction = false;
      clickedMultiplication = false;
      clickedDivision = false;
    }
    result.value += event.key;
  } else if (event.key === 'Escape') {
    result.value = '';
    operandPrevious = 0;
  } else if (event.key === '-') {
    result.value = result.value * -1;
  } else if (event.key === '%') {
    result.value = eval(operandPrevious + (result.value / 100 * operandCurrent));
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    result.value = eval(operandPrevious + result.value);
  }
});

signExchange.addEventListener('click', () => {
  result.value = result.value * -1;
});

performCalculation.addEventListener('click', () => {
  if (divisionError === true && result.value === '0') {
    divisionError = false;
    result.value = "Erro";
    return;
  }
  result.value = eval(operandPrevious + result.value);
});
