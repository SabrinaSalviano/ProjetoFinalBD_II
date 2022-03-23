let delivery = document.getElementById("delivery");
let loja1 = document.getElementById("loja1");
let loja2 = document.getElementById("loja2");
let CampoEndereco = document.getElementById("endereco");

function FinalizarPedido() { 
    if(delivery.checked) {
        const obj = {
            tipo: "Delivery",
            endereco: CampoEndereco.value,
            loja: ""
        };
        fetch("http://localhost:3001/entrega",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        });       
    }
    else if(loja1.checked) {
        const obj = {
            tipo: "Retirada",
            endereco: "",
            loja: "Cat Store loja 1"
        };
        fetch("http://localhost:3001/entrega",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        });       
    }
    else if(loja2.checked) {
        const obj = {
            tipo: "Retirada",
            endereco: "",
            loja: "Cat Store loja 2"
        };
        fetch("http://localhost:3001/entrega",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        });       
    }
    else {
        alert("Selecione o tipo de entrega");
    }
}