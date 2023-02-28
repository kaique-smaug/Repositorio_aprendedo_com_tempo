// Propriedade length retorna a quantidade de caracteres de uma string
let nome = " Kaique Batista Ramos ";
 // document.write(nome.length);
// CharAt retorna um caractere com base na posição do mesmo dentro da cadeia da caracteres
// document.write(nome.charAt(1));
// indexOf Retorna a posição da primeira ocorrencia de um valor específico dentro de uma string
// Sempre que não houverr o caractere informado ira receber um -1
// document.write(nome.indexOf('a'));
// replace permite com base em um valor de pesquisa e um valor de modificação substituir textos dentro de uma string
// document.write(nome.replace('Batista Ramos', 'Não vai ser um ploretariado'));
// substr permite extrair parte de uma string com base em uma posiçãi inicial seguida de um valor que representa a quantidade de caracteres a frente daquela posição inicial
// document.write(nome.substring(7,19));
// toLowerCase serve para converter todos os caracteres de uma string para caixa baixa ja o toUppercase faz ao contrario
// document.write(nome.toLowerCase());
// trim remove os espaçoes em branco entre as extremidades de uma string
document.write(' --- ' + nome.trim() + ' --- ');
