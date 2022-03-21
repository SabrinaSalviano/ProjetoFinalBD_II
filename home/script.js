const cards = document.querySelectorAll("#cesta");
let controle = false
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