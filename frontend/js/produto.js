function ProdutosRacao() {
    const lista = document.querySelector("#lista-itens");

    fetch('http://localhost:3001/product/racao')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var x = 0;
        data.forEach(function() {
            lista.innerHTML += `<div class="item">
            <img src="../images/${Populares[index].img}.png" alt="Produto">
            <p>${Populares[index].nome}</p>
            <p>a partir de</p>
            <p>R$ ${Populares[index].preco}</p>
            <div id="cesta"></div>
            </div>`
          });
  
          comentarios[x] = data[x]['comentario']; 
          
          let test = comentarios[x];
  
          markers[x].addListener('click', () => {
            alert(test);
          });
        x = x + 1;
        })
      }