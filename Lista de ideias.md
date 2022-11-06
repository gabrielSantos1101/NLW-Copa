Fazer um hover nos cards (https://github.com/ssschneider/calendario-wwc-2023)
seletor de temas (https://github.com/gabriel-vitebo/nlw-copa)

````js
document.getElementById("botao").onclick = function () {
  var body = document.getElementsByTagName("body")[0]
  var color = body.getAttribute("class")

  if (color === "yellow") {
    body.classList.remove("yellow")
    body.classList.add("blue")
  } else if (color === "blue") {
    body.classList.remove("blue")
    body.classList.add("green")
  } else if (color === "green") {
    body.classList.remove("green")
    body.classList.add("yellow")
  }
}```
fazer lista de grupos (https://github.com/raphacast/Copa) (https://github.com/csssantos/nlw_calendario)
Fazer um link na bandeira para adicionar no calendario
````
