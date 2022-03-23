let users = [];
let user = document.getElementById('email');
let senha = document.getElementById('senha');

fetch('http://localhost:3001/getusers')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var x = 0;
        data.forEach(function() {
          users[x] = data[x];
          x = x + 1;  
        });
      });

function Login() {
    var x = 0;
    users.forEach(function() {
        if(users[x].email === user.value && users[x].senha === senha.value) {
            CriarSessao();
    
            document.location.href = "../../home/index.html";
        }
        x = x + 1;  
    });
}

function CriarSessao() {
    const obj = {
        email: email.value,
        senha: senha.value
    };
    fetch("http://localhost:3001/sessao",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    alert("Sessão criada"); 
}