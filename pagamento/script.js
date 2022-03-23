let numero = document.getElementById("numero");
let parcela = document.getElementById("parcela");
let nome = document.getElementById("nome");
let validade = document.getElementById("validade");
let cvv = document.getElementById("cvv");

function Pagar() { 
    const obj = {
        tipo: "Cartão de crédito",
        nmrCartao: numero.value,
        nome: nome.value,
        valorP: parcela.value,
        cvv: cvv.value,
        validade: validade.value
    };
    fetch("http://localhost:3001/pagamento",{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    });   
}