const padrao = document.querySelectorAll('.padrão');
const resultado = document.querySelector('.resultado');
const sinal = document.querySelectorAll('.sinal');
const clear = document.querySelector('.clear');
const executarCalculo = document.querySelector('.igual');
const trocaSinal = document.querySelector('.trocaSinal');
const porcentagem = document.querySelector('.porcentagem');
const multiplicacao = document.querySelector('.multiplicacao');
const divisao = document.querySelector('.divisao');

let number1 = 0;
let number2 = 0;
let adicaoClicada = false;
let subtracaoClicada = false;
let multiplicacaoClicada = false;
let divisaoClicada = false;
let porcentagemClicada = false;

padrao.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('adicao')) {
      adicaoClicada = true;
      number1 = `${resultado.value}${'+'}`;
      number2 = resultado.value;
      resultado.value = number2;
    } else if (adicaoClicada) {
      resultado.value = '';
      adicaoClicada = false;
    }
    if (element.classList.contains('subtracao')) {
      subtracaoClicada = true;
      number1 = `${resultado.value}${'-'}`;
      number2 = resultado.value;
      resultado.value = number2;
    } else if (subtracaoClicada) {
      resultado.value = '';
      subtracaoClicada = false;
    }
    if (element.classList.contains('multiplicacao')) {
      multiplicacaoClicada = true;
      number1 = `${resultado.value}${'*'}`;
      number2 = resultado.value;
      resultado.value = number2;
    } else if (multiplicacaoClicada) {
      resultado.value = '';
      multiplicacaoClicada = false;
    }
    if (element.classList.contains('divisao')) {
      divisaoClicada = true;
      number1 = `${resultado.value}${'/'}`;
      number2 = resultado.value;
      resultado.value = number2;
    } else if (divisaoClicada) {
      resultado.value = '';
      divisaoClicada = false;
    }
    if (element.classList.contains('porcentagem')) {
      porcentagemClicada = true;
    }
    let valorr = element.value;
    resultado.value += valorr;
  })
})

clear.addEventListener('click', () => {
  resultado.value = '';
  number1 = 0;
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete' || event.key === 'Backspace') {
    resultado.value = resultado.value.slice(0, -1);
  }
});

trocaSinal.addEventListener('click', () => {
  resultado.value = resultado.value * -1;
})

executarCalculo.addEventListener('click', () => {
  if (porcentagemClicada === true) {
    porcentagemClicada = false;
    return console.log(resultado.value = eval(number1 + (resultado.value / 100 * number2)));
  } else {
    resultado.value = eval(number1 + resultado.value);
  }
})
