const lista = document.querySelector("#lista-itens");
const titulo = document.querySelector("#titulo");
const home = document.querySelector("#home");
const descricao = document.querySelector("#descricao");

const Populares = [
  {
    img: 1,
    nome: "Racão Golden",
    preco: "25,80"
  },
  {
    img:2,
    nome: "Arranhador",
    preco: "119,80"
  },{
    img: 3,
    nome: "Antipulgas",
    preco: "14,90"
  },{
    img: 4,
    nome: "Areia Higiênica",
    preco: "5,90"
  },{
    img: 5,
    nome: "Protetor de Sofá",
    preco: "44,50"
  }
  ,{
    img: 6,
    nome: "Rede para Gatos",
    preco: "33,53"
  }
]
const Medicamentos = [
  {
    img: 3,
    nome: "Anti Pulgas",
    preco: "25,80"
  },
  {
    img:16,
    nome: "Frontline Tops",
    preco: "119,80"
  },{
    img: 17,
    nome: "Semintra 30ml",
    preco: "14,90"
  },{
    img: 18,
    nome: "Frontline Plus",
    preco: "5,90"
  },{
    img: 19,
    nome: "Antibíotico Laby",
    preco: "44,50"
  }
  ,{
    img: 0,
    nome: "Bravecto",
    preco: "33,53"
  }
]
const Brinquedos = [
  {
    img: 12 ,
    nome: "Bolas de Plástico",
    preco: "25,80"
  },
  {
    img:2,
    nome: "Arranhador",
    preco: "119,80"
  },{
    img: 13,
    nome: "Bigben Castelo",
    preco: "14,90"
  },{
    img: 14,
    nome: "Arranhador em caixa",
    preco: "5,90"
  },{
    img: 5,
    nome: "Protetor de Sofá",
    preco: "44,50"
  }
  ,{
    img: 15,
    nome: "Arranhador e argola",
    preco: "33,53"
  }
]
const Racoes = [
  {
    img: 1,
    nome: "Racão Golden",
    preco: "25,80"
  },
  {
    img:7,
    nome: "Arranhador",
    preco: "119,80"
  },{
    img: 8,
    nome: "Antipulgas",
    preco: "14,90"
  },{
    img:9,
    nome: "Areia Higiênica",
    preco: "5,90"
  },{
    img: 10,
    nome: "Protetor de Sofá",
    preco: "44,50"
  }
  ,{
    img: 11,
    nome: "Rede para Gatos",
    preco: "33,53"
  }
]



for (const index in Populares) {
  lista.innerHTML += `<div class="item">
  <img src="../images/${Populares[index].img}.png" alt="Produto">
  <p>${Populares[index].nome}</p>
  <p>a partir de</p>
  <p>R$ ${Populares[index].preco}</p>
  <div id="cesta"></div>
</div>`
}

let controle;
const cards = document.querySelectorAll("#cesta");
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

function addCarrinho(e){
  const currentCard = e.target
  console.log(currentCard)
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
}


function alterarPagina (arr, control){
  
  switch (control) {
    case 1:
      titulo.innerText = "Populares"
      home.style.backgroundImage = "url('../images/populares.png')"
      descricao.innerText= "Pra quem é do time dos felinos, proporcionar rações de produtos de qualidade é o básico!"
      break;
    case 2:
      titulo.innerText = "Rações"
      home.style.backgroundImage = "url('../images/racoes-img.png')"
      descricao.innerText= "As melhores rações para gatos precisam ter vitaminas e minerais de qualidade"
      break;
    case 3:
      titulo.innerText = "Brinquedos"
      home.style.backgroundImage = "url('../images/brinquedos.png')"
      descricao.innerText= "Os brinquedos para gatos ajudam na socialização entre gato e o seu dono"
      break;
      case 4:
        titulo.innerText = "Saúde"
        home.style.backgroundImage = "url('../images/saude.png')"
        descricao.innerText= "A saúde dos gatos pode ser um pouco mais sensível do que a de outros pets."
        break;
  }

  lista.innerHTML = ``
  for (const index in arr) {
    lista.innerHTML += `<div class="item">
    <img src="../images/${arr[index].img}.png" alt="Produto">
    <p>${arr[index].nome}</p>
    <p>a partir de</p>
    <p>R$ ${arr[index].preco}</p>
    <div id="cesta"></div>
  </div>`
  }

  let controle;
  const cards = document.querySelectorAll("#cesta");
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