async function getResult(){
let input = document.querySelector("#searchArea__input");
const regExp = /^\d{8}$/g;

if(input.value == '') {
				alert('o campo nao pode estar vazio')
}
else if(input.value.match(regExp)){
await cep(input.value)
.then(data=>{
document.getElementById("resultArea__container").innerHTML= ``;
document.getElementById("resultArea__container").innerHTML= `<ul class='result__list'><li>Cep:${data.cep}</li><li>Estado:${data.state}</li><li>Cidade:${data.city}</li><li>Bairro:${data.neighborhood}</li><li>Rua:${data.street}</li><li>Serviço:${data.service}</li></ul>`;
}).catch(() =>{
document.getElementById("resultArea__container").innerHTML= `<ul class='result__list'><li>Cep nao encontrado no banco de dados</li></ul>`
})
}
else {
				alert('falha isso não é um cep valido');
}
}
let button = document.querySelector("#searchArea__button");
button.onclick = getResult
