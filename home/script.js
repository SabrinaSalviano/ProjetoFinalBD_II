const lista = document.querySelector("#lista-itens");
const Populares = []
const Medicamentos = []
const Brinquedos = []
const Racoes = []
const titulo = document.querySelector("#titulo");
const home = document.querySelector("#home");
const descricao = document.querySelector("#descricao");

function ProdutosRacao() {
  fetch('http://localhost:3001/product/racao')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var x = 0;
      data.forEach(function() {
        Racoes[x] = data[x];
        x = x + 1;
      });
    })
}
function ProdutosPopulares() {
  fetch('http://localhost:3001/product/popular')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var x = 0;
      data.forEach(function() {
        Populares[x] = data[x];
        x = x + 1;  
      });
    })
}
function ProdutosSaude() {
  fetch('http://localhost:3001/product/saude')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var x = 0;
      data.forEach(function() {
        Medicamentos[x] = data[x];
        x = x + 1;
      });
    })
}
function ProdutosBrinquedos() {
  fetch('http://localhost:3001/product/brinquedo')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var x = 0;
      data.forEach(function() {
        Brinquedos[x] = data[x];
        x = x + 1;
      });
    })
}


ProdutosRacao();
ProdutosPopulares();
ProdutosBrinquedos();
ProdutosSaude();

for (const index in Populares) {
  console.log(Populares[index]);

  lista.innerHTML += `<div class="item">
  <img src="../images/${Populares[index].img}.png" alt="Produto">
  <p>${Populares[index].nome}</p>
  <p>a partir de</p>
  <p>R$ ${Populares[index].valor}</p>
  <div onclick="addCarrinho(this)" id=${Populares[index].id}></div>
</div>`
}

let controle;
const cards = document.querySelectorAll(".cesta");
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const currentCard = event.target;
    console.log(currentCard);
    if(!controle){
      currentCard.style.backgroundImage="url(../images/confirmado.png)"
      currentCard.style.transition = 'transform 0.5s'
      currentCard.style.transform = 'translateX(0) scale(1.5)';
      controle = true
    }else{
      currentCard.style.backgroundImage="url(../images/cesta.png)"
      currentCard.style.transform = 'translateX(0) scale(1)';
      controle = false
    }
  });
});

function addCarrinho(ex){
  const cards = document.querySelectorAll(".cesta");
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const currentCard = event.target;
      if(!controle){
        currentCard.style.backgroundImage="url(../images/confirmado.png)"
        currentCard.style.transition = 'transform 0.5s'
        currentCard.style.transform = 'translateX(0) scale(1.5)';
        controle = true
      }else{
        currentCard.style.backgroundImage="url(../images/cesta.png)"
        currentCard.style.transform = 'translateX(0) scale(1)';
        controle = false
      }
    });
  });
}

function alterarPagina (arr, control){
  
  switch (control) {
    case 1:
      titulo.innerText = "Populares"
      home.style.backgroundImage = "url('../images/populares.png')"
      descricao.innerText= "Pra quem ?? do time dos felinos, proporcionar ra????es de produtos de qualidade ?? o b??sico!"
      break;
    case 2:
      titulo.innerText = "Ra????es"
      home.style.backgroundImage = "url('../images/racoes-img.png')"
      descricao.innerText= "As melhores ra????es para gatos precisam ter vitaminas e minerais de qualidade"
      break;
    case 3:
      titulo.innerText = "Brinquedos"
      home.style.backgroundImage = "url('../images/brinquedos.png')"
      descricao.innerText= "Os brinquedos para gatos ajudam na socializa????o entre gato e o seu dono"
      break;
      case 4:
        titulo.innerText = "Sa??de"
        home.style.backgroundImage = "url('../images/saude.png')"
        descricao.innerText= "A sa??de dos gatos pode ser um pouco mais sens??vel do que a de outros pets."
        break;
  }

  lista.innerHTML = ``
  for (const index in arr) {

    lista.innerHTML += `<div class="item">
    <img src="../images/${arr[index].img}.png" alt="Produto">
    <p>${arr[index].nome}</p>
    <p>a partir de</p>
    <p>R$ ${arr[index].valor}0</p>
    <div onclick="addCarrinho(${arr[index].id})" class="cesta" id=${arr[index].id}></div>
    </div>`
  }

  let controle;
  const cards = document.querySelectorAll(".cesta");
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const currentCard = event.target;
      if(!controle){
        currentCard.style.backgroundImage="url(../images/confirmado.png)"
        currentCard.style.transition = 'transform 0.5s'
        currentCard.style.transform = 'translateX(0) scale(1.5)';
        controle = true
      }else{
        currentCard.style.backgroundImage="url(../images/cesta.png)"
        currentCard.style.transform = 'translateX(0) scale(1)';
        controle = false
      }
    });
  });
}
