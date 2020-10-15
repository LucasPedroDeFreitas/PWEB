var numero1 = prompt('Informe o primeiro número:');
var numero2 = prompt('Informe o segundo número:');
var numero3 = prompt('Informe o terceiro número:');

maiorNumero(numero1, numero2, numero3);

function maiorNumero(numero1, numero2, numero3) {
  var arrayNumeros = [numero1, numero2, numero3];

  arrayNumeros.sort((a, b) => a - b);

  alert(arrayNumeros[arrayNumeros.length - 1]);
}
