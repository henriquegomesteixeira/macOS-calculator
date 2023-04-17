const defaultKey = document.querySelectorAll('.default-key');
const result = document.querySelector('.result');
const deleteButton = document.querySelector('.delete-button');
const performCalculation = document.querySelector('.to-execute');
const signExchange = document.querySelector('.sign-exchange');

let number1 = 0;
let number2 = 0;
let adicaoClicada = false;
let subtracaoClicada = false;
let multiplicacaoClicada = false;
let divisaoClicada = false;

defaultKey.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('addition')) {
      adicaoClicada = true;
      number1 = `${result.value}${'+'}`;
      number2 = result.value;
      result.value = number2;
    } else if (adicaoClicada) {
      result.value = '';
      adicaoClicada = false;
    }
    if (element.classList.contains('subtraction')) {
      subtracaoClicada = true;
      number1 = `${result.value}${'-'}`;
      number2 = result.value;
      result.value = number2;
    } else if (subtracaoClicada) {
      result.value = '';
      subtracaoClicada = false;
    }
    if (element.classList.contains('multiplication')) {
      multiplicacaoClicada = true;
      number1 = `${result.value}${'*'}`;
      number2 = result.value;
      result.value = number2;
    } else if (multiplicacaoClicada) {
      result.value = '';
      multiplicacaoClicada = false;
    }
    if (element.classList.contains('division')) {
      divisaoClicada = true;
      number1 = `${result.value}${'/'}`;
      number2 = result.value;
      result.value = number2;
    } else if (divisaoClicada) {
      result.value = '';
      divisaoClicada = false;
    }
    if (element.classList.contains('percentage')) {
      result.value = eval(number1 + (result.value / 100 * number2));
    }
    let valorr = element.value;
    result.value += valorr;
  })
})

deleteButton.addEventListener('click', () => {
  result.value = '';
  number1 = 0;
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete' || event.key === 'Backspace') {
    result.value = result.value.slice(0, -1);
  }
});

signExchange.addEventListener('click', () => {
  result.value = result.value * -1;
})

performCalculation.addEventListener('click', () => {
  result.value = eval(number1 + result.value);
})
