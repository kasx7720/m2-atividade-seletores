/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/
const meuElemento = document.getElementById("ingredients")
console.log(meuElemento)

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/
const meuElemento2 = document.getElementsByTagName("h1")[0]
console.log(meuElemento2)

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/
const meuElemento3 = document.getElementsByClassName("recipe")[0]
console.log(meuElemento3)

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/
const meuElemento4 = document.getElementsByTagName("h2")
for (let i = 0; i < meuElemento4.length; i++) {
  meuElemento4[i].style.color = 'blue';
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/
const meuElemento5 = document.getElementsByTagName("input")
for (let i = 0; i < meuElemento5.length; i++){
  meuElemento5[i].style.borderColor = "red"
}