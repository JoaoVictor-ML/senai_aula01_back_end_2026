// Variaveis não tipadas
x = 10;
y = 25;
// Processamento
soma = x + y;
sub = x - y;
mult = x * y;
div = x / y;
raiz = Math.sqrt(y);
potencia = Math.pow(x, 2);
resto = x % y;
// Saidas concatenadas
console.log(" A Soma de " + x + " + " + y + " = " + soma);
console.log(" A Subtração de " + x + " + " + y + " = " + sub);
// Saidas concatenadas com aspas simples 'apostrofes'
console.log(' A Multiplicação de ' + x + ' * ' + y + ' = ' + mult);
console.log(' A Divisão de ' + x + ' / ' + y + ' = ' + div.toFixed(2));
console.log(' O resto da divisão de ' + x + ' % ' + y + ' = ' + resto);
// Saidas cm template string (crase)
console.log(` A Raiz Quadrada de ${y} = ${raiz.toFixed(2)} `);
console.log(` A Potência de ${x}² = ${potencia} `);
