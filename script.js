const defaultKey = document.querySelectorAll('.default-key');
const result = document.querySelector('.result');
const deleteButton = document.querySelector('.delete-button');
const performCalculation = document.querySelector('.to-execute');
const signExchange = document.querySelector('.sign-exchange');

let operandPrevious = 0;
let operandCurrent = 0;
let adicaoClicada = false;
let subtracaoClicada = false;
let multiplicacaoClicada = false;
let divisaoClicada = false;
let erroDivisão = false;

defaultKey.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('addition')) {
      adicaoClicada = true;
      operandPrevious = `${result.value}${'+'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (adicaoClicada) {
      result.value = '';
      adicaoClicada = false;
    }
    if (element.classList.contains('subtraction')) {
      subtracaoClicada = true;
      operandPrevious = `${result.value}${'-'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (subtracaoClicada) {
      result.value = '';
      subtracaoClicada = false;
    }
    if (element.classList.contains('multiplication')) {
      multiplicacaoClicada = true;
      operandPrevious = `${result.value}${'*'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
    } else if (multiplicacaoClicada) {
      result.value = '';
      multiplicacaoClicada = false;
    }
    if (element.classList.contains('division')) {
      divisaoClicada = true;
      operandPrevious = `${result.value}${'/'}`;
      operandCurrent = result.value;
      result.value = operandCurrent;
      erroDivisão = true;
    } else if (divisaoClicada) {
      result.value = '';
      divisaoClicada = false;
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
    if (adicaoClicada || subtracaoClicada || multiplicacaoClicada || divisaoClicada) {
      result.value = '';
      adicaoClicada = false;
      subtracaoClicada = false;
      multiplicacaoClicada = false;
      divisaoClicada = false;
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
  if (erroDivisão === true && result.value === '0') {
    erroDivisão = false;
    result.value = "Erro";
    return;
  }
  result.value = eval(operandPrevious + result.value);
});
