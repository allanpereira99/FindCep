async function getResult() {
  let input = document.querySelector("#input__item");
  const regExp = /^\d{8}$/g;

  if (input.value == "") {
    alert("o campo nao pode estar vazio");
  } else if (input.value.match(regExp)) {
    await cep(input.value)
      .then((data) => {
        document.getElementById("result__area").innerHTML = ``;
        document.getElementById(
          "result__area"
        ).innerHTML = `<ul class='result__list'><li>Cep: ${data.cep}</li><li>Estado: ${data.state}</li><li>Cidade: ${data.city}</li><li>Bairro: ${data.neighborhood}</li><li>Rua:${data.street}</li><li>Serviço: ${data.service}</li></ul>`;
      })
      .catch(() => {
        document.getElementById(
          "result__area"
        ).innerHTML = `<ul class='result__list'><li>Cep nao encontrado no banco de dados</li></ul>`;
      });
  } else {
    alert("falha isso não é um cep valido");
  }
}
let button = document.querySelector("#input__button");
button.onclick = getResult;
