const paragrafo = document.getElementById("hello-js")


paragrafo.innerHTML = "olá";

fetch('hello.txt')
  .then(response => response.text())
  .then(text => {
    const array = text.split("\n");
    console.log(array);
  })