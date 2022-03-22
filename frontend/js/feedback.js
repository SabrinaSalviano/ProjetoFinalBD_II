function alterarPagina (arr){
    lista.innerHTML = ``
    for (const index in arr) {
      lista.innerHTML += `<div class="item">
      <img src="../images/${arr[index].img}.png" alt="Produto">
      <p>${arr[index].nome}</p>
      <p>a partir de</p>
      <p>R$ ${arr[index].preco}</p>
      <div id="cesta"></div>
    </div>`
    }}
