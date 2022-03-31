let nome = document.getElementById("nome");
let cpf = document.getElementById("cpf");
let email = document.getElementById("email");
let senha = document.getElementById("senha");

let confirmaEmail = document.getElementById("confirmaEmail");
let confirmaSenha = document.getElementById("confirmaSenha");


function Cadastrar() { 
    
    if(email.value != "" && nome.value != "" && cpf.value != "" && senha.value != "") {
        if(email.value == confirmaEmail.value && senha.value == confirmaSenha.value) {

            const obj = {
                nome: nome.value,
                cpf: cpf.value,
                email: email.value,
                senha: senha.value
            };
            fetch("http://localhost:3001/users",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            });       

            alert("Inserido com sucesso");
            
            // document.location.href = "///home/sabrina/ProjetoFinalBD_II/frontend/html/login.html";
        }
        else {
            alert("Email ou senha não batem");
        }
    }
    else {
        alert("Preencha todos campos");
    }    
}

const MasK = {
    // Mascara do CPF    
    cpf(input){
        let value = input.value;
        value = value.replace(/\D/, "");    
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        input.value = value;
    }
}
