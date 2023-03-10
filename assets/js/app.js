const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / altura ** 2).toFixed(2);

    let classificacao = '';
    if (valorIMC < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (valorIMC < 25) {
      classificacao = 'Peso ideal. Parabéns!!!';
    } else if (valorIMC < 30) {
      classificacao = 'Você está com sobrepeso';
    } else if (valorIMC < 35) {
      classificacao = 'Você está com obesidade grau I';
    } else if (valorIMC < 40) {
      classificacao = 'Você está com obesidade grau II';
    } else {
      classificacao = 'Cuidado!!! Você está com obesidade grau III';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC}. ${classificacao}.`;
  } else {
    resultado.textContent = 'Preencha todos os campos.';
  }
}

calcular.addEventListener('click', imc);
