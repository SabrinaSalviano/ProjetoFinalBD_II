describe("Teste de sistema", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/frontend/html/cadastro.html");
    });

    it('Deve preencher todos os campos corretamente', () => {

      cy.get('#nome')
      .type('Maria Das Dores').should('have.value', 'Maria Das Dores')

      cy.get('#cpf')
      .type('123.123.123-47').should('have.value', '123.123.123-47')
      
      cy.get('#email')
        .type('maria@email.com').should('have.value', 'maria@email.com')
      
      cy.get('#confirmaEmail')
      .type('maria@email.com').should('have.value', 'maria@email.com')
  
      cy.get('#senha')
      .type('123456').should('have.value', '123456')

      cy.get('#confirmaSenha')
      .type('123456').should('have.value', '123456')

      cy.get('#cadastrar').click();

    });

    it('Deve solicitar que todos os campos sejam preenchidos', () => {
      
      cy.get('#email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    
      cy.get('#confirmaEmail')
      .type('fake@email.com').should('have.value', 'fake@email.com')

      cy.get('#senha')
      .type('password').should('have.value', 'password')

      cy.get('#confirmaSenha')
      .type('password').should('have.value', 'password')

      cy.get('#cadastrar').click();            

      
    })
});
