const element = document.getElementById('blog_title');
console.log(element);

const elementTag = document.getElementsByTagName('h2');
console.log(elementTag);


// devolve um html collection não aceita foreach
const element1 = document.getElementsByClassName('one');
console.log(element1);

const element2 = document.getElementsByClassName('two');
console.log(element1);

const selector = document.querySelector('.five');
console.log(selector);

const selectorAll = document.querySelectorAll('.six');
console.log(selector);


// SelectorAll aceita foreach é um node list
const selectorAllHash = document.querySelectorAll('#title');
console.log(selector);
selectorAllHash.forEach(el => console.log(el));

//Qual usar?
// getElementById retorna (element)
// getElementByClassName retorna (HTMLCollection)
// getElementsByTagName retorna (HTMLCollection)
// querySelector retorna (element)
// querySelectorAll retorna (NodeList)


// manipulando conteúdo de texto
// textContent
const elemento = document.querySelector('h1');
element.textContent += "Olá devs";

// troca texto interno do elemento html "sobreescreve"
// innerText
const element4 = document.querySelector('h5')
element4.innerText = "Ola mundo";

// innerHtml podemos usar tags html dentro de texto
const element5 = document.querySelector('h5')
element.innerHTML = "Olá devs! <small>!!!</small>"

// value
const element6 = document.querySelector('input')
element6.value = "Valor que eu quiser";