
const MasK = {

    // Mascara do CPF
    
    cpf(input){

    let value = input.value;
    value = value.replace(/\D/, "");
    
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    input.value = value;
    }
}
